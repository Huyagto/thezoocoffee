const bcrypt = require('bcrypt');
const prisma = require('../../config/prisma');
const otp = require('otp-generator');
const jwt = require('jsonwebtoken');

const { AuthFailureError, BadRequestError, BadGatewayError } = require('../../core/error.response');

const { Created, OK } = require('../../core/success.response');

const { createAccessToken, createRefreshToken } = require('../../auth/checkAuth');

const redisClient = require('../../config/redis');

const sendMailForgotPassword = require('../../utils/mailForgotPassword');

const { setAuthCookies, clearAuthCookies } = require('../../helpers/user.helper');

const { registerUser, loginUser } = require('../../services/user.service');

const { oAuth2Client, oauth2 } = require('../../utils/loginOAuth2Google');

const { getFacebookLoginUrl, getFacebookAccessToken, getFacebookUserInfo } = require('../../utils/loginOAuth2Facebook');
const CLIENT_REDIRECT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

const OTP_CONFIG = {
    digits: true,
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
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
        const user = await registerUser(req.body);

        const accessToken = createAccessToken({
            id: user.id,
        });

        const refreshToken = createRefreshToken({
            id: user.id,
        });

        setAuthCookies(res, accessToken, refreshToken);

        new Created({
            message: 'Đăng ký thành công',
            metadata: user,
        }).send(res);
    }

    async login(req, res) {
        const user = await loginUser(req.body);

        const accessToken = createAccessToken({
            id: user.id,
        });

        const refreshToken = createRefreshToken({
            id: user.id,
        });

        setAuthCookies(res, accessToken, refreshToken);

        new OK({
            message: 'Đăng nhập thành công',
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
            throw new BadRequestError('Không nhận được code từ Google');
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

        const accessToken = createAccessToken({
            id: user.id,
        });

        const refreshToken = createRefreshToken({
            id: user.id,
        });

        setAuthCookies(res, accessToken, refreshToken);
        return sendClientRedirect(res);

        return new OK({
            message: 'Đăng nhập Google thành công',
            metadata: user,
        }).send(res);
    }
    async loginOauth2Facebook(req, res) {
        const url = getFacebookLoginUrl();
        return res.redirect(url);
    }
    async Oauth2callbackFacebook(req, res) {
        const { code } = req.query;

        if (!code) {
            throw new BadRequestError('Không nhận được code từ Facebook');
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

        const jwtAccessToken = createAccessToken({
            id: user.id,
        });

        const refreshToken = createRefreshToken({
            id: user.id,
        });

        setAuthCookies(res, jwtAccessToken, refreshToken);
        return sendClientRedirect(res);

        return new OK({
            message: 'Đăng nhập Facebook thành công',
            metadata: user,
        }).send(res);
    }
    async logout(req, res) {
        clearAuthCookies(res);

        new OK({
            message: 'Đăng xuất thành công',
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
            throw new AuthFailureError('Người dùng không tồn tại');
        }

        new OK({
            message: 'Xác thực người dùng thành công',
            metadata: currentUser,
        }).send(res);
    }

    async updateProfile(req, res) {
        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui lòng đăng nhập');
        }

        const { name, phone, address } = req.body;

        const updatedUser = await prisma.users.update({
            where: {
                id: userId,
            },
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
            message: 'Cập nhật hồ sơ thành công',
            metadata: updatedUser,
        }).send(res);
    }

    async forgotPassword(req, res) {
        const { email } = req.body;

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            throw new AuthFailureError('Email không tồn tại');
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
            throw new BadGatewayError('Không thể gửi email');
        }

        new OK({
            message: 'Email đặt lại mật khẩu đã được gửi',
        }).send(res);
    }

    async verifyForgotPassword(req, res) {
        const { otp: inputOtp, password } = req.body;

        const token = req.cookies.tokenVerifyForgotPassword;

        if (!token) {
            throw new AuthFailureError('Token xác minh không tồn tại');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const email = decoded.email;

        const storedOtp = await redisClient.get(`otp:${email}`);

        if (!storedOtp) {
            throw new AuthFailureError('OTP đã hết hạn hoặc không tồn tại');
        }

        if (storedOtp !== inputOtp) {
            throw new AuthFailureError('OTP không đúng');
        }

        const user = await prisma.users.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            throw new AuthFailureError('Email không tồn tại');
        }

        const isSamePassword = await bcrypt.compare(password, user.password_hash);

        if (isSamePassword) {
            throw new BadRequestError('Mật khẩu mới không được trùng mật khẩu cũ');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.users.update({
            where: {
                email,
            },
            data: {
                password_hash: hashedPassword,
            },
        });

        res.clearCookie('tokenVerifyForgotPassword');

        await redisClient.del(`otp:${email}`);

        new OK({
            message: 'Đổi mật khẩu thành công',
            metadata: true,
        }).send(res);
    }

    async resetPassword(req, res) {
        const { oldPassword, newPassword } = req.body;

        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui lòng đăng nhập');
        }

        const findUser = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!findUser) {
            throw new AuthFailureError('Người dùng không tồn tại');
        }

        const isValidOldPassword = await bcrypt.compare(oldPassword, findUser.password_hash);

        if (!isValidOldPassword) {
            throw new BadRequestError('Mật khẩu cũ không chính xác');
        }

        const isSamePassword = await bcrypt.compare(newPassword, findUser.password_hash);

        if (isSamePassword) {
            throw new BadRequestError('Mật khẩu mới không được trùng mật khẩu cũ');
        }

        const generatedOtp = otp.generate(6, OTP_CONFIG);

        try {
            await sendMailForgotPassword(findUser.email, generatedOtp);
        } catch (error) {
            throw new BadGatewayError('Không thể gửi email');
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
            message: 'Mã OTP xác nhận đổi mật khẩu đã được gửi đến email của bạn',
            metadata: true,
        }).send(res);
    }

    async verifyResetPassword(req, res) {
        const { otp: inputOtp } = req.body;

        const userId = req.user?.id;

        if (!userId) {
            throw new AuthFailureError('Vui lòng đăng nhập');
        }

        const findUser = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!findUser) {
            throw new AuthFailureError('Người dùng không tồn tại');
        }

        const storedData = await redisClient.get(`otp:reset-password:${findUser.email}`);

        if (!storedData) {
            throw new AuthFailureError('OTP đã hết hạn hoặc không tồn tại');
        }

        const { otp, newPassword } = JSON.parse(storedData);

        if (otp !== inputOtp) {
            throw new AuthFailureError('OTP không đúng');
        }

        await prisma.users.update({
            where: {
                id: userId,
            },
            data: {
                password_hash: newPassword,
            },
        });

        await redisClient.del(`otp:reset-password:${findUser.email}`);

        new OK({
            message: 'Đổi mật khẩu thành công',
            metadata: true,
        }).send(res);
    }

    async getUsers(req, res) {
        const users = await prisma.users.findMany({
            select: SAFE_USER_SELECT,
            orderBy: {
                created_at: 'desc',
            },
        });

        new OK({
            message: 'Lấy danh sách người dùng thành công',
            metadata: users,
        }).send(res);
    }

    async updateUserRole(req, res) {
        const userId = Number(req.params.id);
        const { role } = req.body;

        if (Number.isNaN(userId)) {
            throw new BadRequestError('ID người dùng không hợp lệ');
        }

        const updatedUser = await prisma.users.update({
            where: { id: userId },
            data: { role },
            select: SAFE_USER_SELECT,
        });

        new OK({
            message: 'Cập nhật vai trò người dùng thành công',
            metadata: updatedUser,
        }).send(res);
    }

    async deleteUser(req, res) {
        const userId = Number(req.params.id);

        if (Number.isNaN(userId)) {
            throw new BadRequestError('ID người dùng không hợp lệ');
        }

        if (req.user?.id === userId) {
            throw new BadRequestError('Không thể xóa chính bạn');
        }

        await prisma.users.delete({
            where: { id: userId },
        });

        new OK({
            message: 'Xóa người dùng thành công',
            metadata: true,
        }).send(res);
    }
}

module.exports = new UserController();
