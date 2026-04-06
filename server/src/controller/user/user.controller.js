const bcrypt = require('bcrypt');
const prisma = require('../../config/prisma');
const otp = require('otp-generator');
const jwt = require('jsonwebtoken');

const { AuthFailureError, BadRequestError, BadGatewayError } = require('../../core/error.response');
const { Created, OK } = require('../../core/success.response');
const { createAccessToken, createRefreshToken } = require('../../auth/checkAuth');
const redisClient = require('../../config/redis');
const sendMailForgotPassword = require('../../utils/mailForgotPassword');
const { oAuth2Client, oauth2 } = require('../../utils/loginOAuth2Google');
const { getFacebookLoginUrl, getFacebookAccessToken, getFacebookUserInfo } = require('../../utils/loginOAuth2Facebook');

const CLIENT_REDIRECT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

const OTP_CONFIG = {
    digits: true,
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
};

const SALT_ROUNDS = 10;
const DEFAULT_ROLE = 'customer';
const ONE_DAY = 24 * 60 * 60 * 1000;
const THIRTY_DAYS = 30 * ONE_DAY;
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
};

const SAFE_USER_SELECT = {
    id: true,
    name: true,
    email: true,
    phone: true,
    address: true,
    role: true,
    created_at: true,
    updated_at: true,
    facebook_id: true,
    google_id: true,
};

const normalizeEmail = (email) => email.trim().toLowerCase();
const normalizeString = (value) => value?.trim() || null;

const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie('accessToken', accessToken, {
        ...COOKIE_OPTIONS,
        maxAge: ONE_DAY,
    });

    res.cookie('refreshToken', refreshToken, {
        ...COOKIE_OPTIONS,
        maxAge: THIRTY_DAYS,
    });

    res.cookie('logged', 1, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: THIRTY_DAYS,
    });
};

const clearAuthCookies = (res) => {
    ['accessToken', 'refreshToken', 'logged'].forEach((cookieName) => {
        res.clearCookie(cookieName);
    });
};

const sendClientRedirect = (res, path = '/profile') => {
    const destination = `${CLIENT_REDIRECT_URL}${path}`;

    return res.status(200).send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=${destination}" />
    <title>Redirecting...</title>
  </head>
  <body>
    <script>
      window.location.replace(${JSON.stringify(destination)});
    </script>
    <p>Redirecting to your account...</p>
  </body>
</html>`);
};

class UserController {
    async register(req, res) {
        const { name, email, password, phone, address } = req.body;
        const normalizedEmail = normalizeEmail(email);

        const existingUser = await prisma.users.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            throw new BadRequestError('Email da ton tai');
        }

        const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await prisma.users.create({
            data: {
                name: name.trim(),
                email: normalizedEmail,
                phone: normalizeString(phone),
                address: normalizeString(address),
                password_hash,
                role: DEFAULT_ROLE,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true,
                role: true,
                created_at: true,
            },
        });

        const accessToken = createAccessToken({ id: user.id });
        const refreshToken = createRefreshToken({ id: user.id });

        setAuthCookies(res, accessToken, refreshToken);

        new Created({
            message: 'Dang ky thanh cong',
            metadata: user,
        }).send(res);
    }

    async login(req, res) {
        const { email, password } = req.body;

        const existingUser = await prisma.users.findUnique({
            where: { email: normalizeEmail(email) },
        });

        if (!existingUser) {
            throw new AuthFailureError('Email hoac mat khau khong dung');
        }

        const isValidPassword = await bcrypt.compare(password, existingUser.password_hash);

        if (!isValidPassword) {
            throw new AuthFailureError('Email hoac mat khau khong dung');
        }

        const user = {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
        };

        const accessToken = createAccessToken({ id: user.id });
        const refreshToken = createRefreshToken({ id: user.id });

        setAuthCookies(res, accessToken, refreshToken);

        new OK({
            message: 'Dang nhap thanh cong',
            metadata: user,
        }).send(res);
    }

    async loginOauth2Google(req, res) {
        const url = oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['email', 'profile'],
            prompt: 'consent',
        });

        return res.redirect(url);
    }

    async Oauth2callbackGoogle(req, res) {
        const { code } = req.query;

        if (!code) {
            throw new BadRequestError('Khong nhan duoc code tu Google');
        }

        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);

        const { data } = await oauth2.userinfo.get();
        const { email, name, id: googleId } = data;

        let user = await prisma.users.findUnique({
            where: { email },
            select: SAFE_USER_SELECT,
        });

        if (!user) {
            user = await prisma.users.create({
                data: {
                    email,
                    name,
                    google_id: googleId,
                    role: 'customer',
                },
                select: SAFE_USER_SELECT,
            });
        } else if (!user.google_id) {
            user = await prisma.users.update({
                where: { id: user.id },
                data: { google_id: googleId },
                select: SAFE_USER_SELECT,
            });
        }

        const accessToken = createAccessToken({ id: user.id });
        const refreshToken = createRefreshToken({ id: user.id });

        setAuthCookies(res, accessToken, refreshToken);
        return sendClientRedirect(res);
    }

    async loginOauth2Facebook(req, res) {
        const url = getFacebookLoginUrl();
        return res.redirect(url);
    }

    async Oauth2callbackFacebook(req, res) {
        const { code } = req.query;

        if (!code) {
            throw new BadRequestError('Khong nhan duoc code tu Facebook');
        }

        const accessToken = await getFacebookAccessToken(code);
        const data = await getFacebookUserInfo(accessToken);
        const { id: facebookId, name, email } = data;

        let user = await prisma.users.findUnique({
            where: { email },
            select: SAFE_USER_SELECT,
        });

        if (!user) {
            user = await prisma.users.create({
                data: {
                    email,
                    name,
                    facebook_id: facebookId,
                    role: 'customer',
                },
                select: SAFE_USER_SELECT,
            });
        } else if (!user.facebook_id) {
            user = await prisma.users.update({
                where: { id: user.id },
                data: { facebook_id: facebookId },
                select: SAFE_USER_SELECT,
            });
        }

        const jwtAccessToken = createAccessToken({ id: user.id });
        const refreshToken = createRefreshToken({ id: user.id });

        setAuthCookies(res, jwtAccessToken, refreshToken);
        return sendClientRedirect(res);
    }

    async logout(req, res) {
        clearAuthCookies(res);

        new OK({
            message: 'Dang xuat thanh cong',
            metadata: true,
        }).send(res);
    }

    async authUser(req, res) {
        const currentUser = await prisma.users.findUnique({
            where: {
                id: req.user?.id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                phone: true,
                address: true,
            },
        });

        if (!currentUser) {
            throw new AuthFailureError('Nguoi dung khong ton tai');
        }

        new OK({
            message: 'Xac thuc nguoi dung thanh cong',
            metadata: currentUser,
        }).send(res);
    }

    async updateProfile(req, res) {
        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui long dang nhap');
        }

        const { name, phone, address } = req.body;

        const updatedUser = await prisma.users.update({
            where: { id: userId },
            data: {
                name: name.trim(),
                phone: phone?.trim() || null,
                address: address?.trim() || null,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                phone: true,
                address: true,
            },
        });

        new OK({
            message: 'Cap nhat ho so thanh cong',
            metadata: updatedUser,
        }).send(res);
    }

    async forgotPassword(req, res) {
        const { email } = req.body;

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            throw new AuthFailureError('Email khong ton tai');
        }

        const generatedOtp = otp.generate(6, OTP_CONFIG);
        await redisClient.set(`otp:${email}`, generatedOtp, { EX: 300 });

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '5m',
        });

        res.cookie('tokenVerifyForgotPassword', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 5 * 60 * 1000,
        });

        try {
            await sendMailForgotPassword(email, generatedOtp);
        } catch (error) {
            throw new BadGatewayError('Khong the gui email');
        }

        new OK({
            message: 'Email dat lai mat khau da duoc gui',
        }).send(res);
    }

    async verifyForgotPassword(req, res) {
        const { otp: inputOtp, password } = req.body;
        const token = req.cookies.tokenVerifyForgotPassword;

        if (!token) {
            throw new AuthFailureError('Token xac minh khong ton tai');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        const storedOtp = await redisClient.get(`otp:${email}`);

        if (!storedOtp) {
            throw new AuthFailureError('OTP da het han hoac khong ton tai');
        }

        if (storedOtp !== inputOtp) {
            throw new AuthFailureError('OTP khong dung');
        }

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            throw new AuthFailureError('Email khong ton tai');
        }

        const isSamePassword = await bcrypt.compare(password, user.password_hash);

        if (isSamePassword) {
            throw new BadRequestError('Mat khau moi khong duoc trung mat khau cu');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.users.update({
            where: { email },
            data: { password_hash: hashedPassword },
        });

        clearAuthCookies(res);
        res.clearCookie('tokenVerifyForgotPassword');
        await redisClient.del(`otp:${email}`);

        new OK({
            message: 'Doi mat khau thanh cong',
            metadata: true,
        }).send(res);
    }

    async resetPassword(req, res) {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui long dang nhap');
        }

        const findUser = await prisma.users.findUnique({
            where: { id: userId },
        });

        if (!findUser) {
            throw new AuthFailureError('Nguoi dung khong ton tai');
        }

        const isValidOldPassword = await bcrypt.compare(oldPassword, findUser.password_hash);

        if (!isValidOldPassword) {
            throw new BadRequestError('Mat khau cu khong chinh xac');
        }

        const isSamePassword = await bcrypt.compare(newPassword, findUser.password_hash);

        if (isSamePassword) {
            throw new BadRequestError('Mat khau moi khong duoc trung mat khau cu');
        }

        const generatedOtp = otp.generate(6, OTP_CONFIG);

        try {
            await sendMailForgotPassword(findUser.email, generatedOtp);
        } catch (error) {
            throw new BadGatewayError('Khong the gui email');
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await redisClient.set(
            `otp:reset-password:${findUser.email}`,
            JSON.stringify({
                otp: generatedOtp,
                newPassword: hashedNewPassword,
            }),
            { EX: 300 },
        );

        new OK({
            message: 'Ma OTP xac nhan doi mat khau da duoc gui den email cua ban',
            metadata: true,
        }).send(res);
    }

    async verifyResetPassword(req, res) {
        const { otp: inputOtp } = req.body;
        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui long dang nhap');
        }

        const findUser = await prisma.users.findUnique({
            where: { id: userId },
        });

        if (!findUser) {
            throw new AuthFailureError('Nguoi dung khong ton tai');
        }

        const storedData = await redisClient.get(`otp:reset-password:${findUser.email}`);

        if (!storedData) {
            throw new AuthFailureError('OTP da het han hoac khong ton tai');
        }

        const { otp, newPassword } = JSON.parse(storedData);

        if (otp !== inputOtp) {
            throw new AuthFailureError('OTP khong dung');
        }

        await prisma.users.update({
            where: { id: userId },
            data: { password_hash: newPassword },
        });

        clearAuthCookies(res);
        await redisClient.del(`otp:reset-password:${findUser.email}`);

        new OK({
            message: 'Doi mat khau thanh cong',
            metadata: true,
        }).send(res);
    }
}

module.exports = new UserController();
