const { ConflictRequestError, AuthFailureError, BadRequestError, BadGatewayError } = require('../core/error.response');
const bcrypt = require('bcrypt');
const prisma = require('../config/mysqlDB');
const { Created, OK } = require('../core/success.response');
const otp = require('otp-generator')
const  sendMailForgotPassword  = require('../utils/mailForgotPassword');
const { createAccessToken, createRefreshToken } = require('../auth/checkAuth');
function setCookie(res, accessToken, refreshToken) {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 1 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
    });
    res.cookie('logged', 1, {
        httpOnly: false,
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
    });
}
class UserController {
    async register(req, res) {
        console.log('Register request received:', req.body);
        const { name, email, phone, password, password_hash, address } = req.body;
        const plainPassword = password ?? password_hash;
        if (!name || !email || !plainPassword) {
            throw new BadRequestError('Tên, email và mật khẩu là bắt buộc');
        }
        const findUser = await prisma.users.findUnique({
            where: {
                email,
            },
        });
        if (findUser) {
            throw new ConflictRequestError('Email đã tồn tại');
        }
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(plainPassword, saltRound);
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                phone,
                password_hash: hashPassword,
                address,
            },
        });
        const accessToken = createAccessToken({ id: newUser.id });
        const refreshToken = createRefreshToken({ id: newUser.id });
        setCookie(res, accessToken, refreshToken);
        new Created({
            message: 'Đăng ký thành công',
            metadata: newUser,
        }).send(res);
    }
    async login(req, res) {
        const { email, password, password_hash } = req.body;
        const plainPassword = password ?? password_hash;
        if (!email || !plainPassword) {
            throw new BadRequestError('Email và mật khẩu là bắt buộc');
        }

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            throw new AuthFailureError('Email hoặc mật khẩu không đúng');
        }

        const isValidPassword = await bcrypt.compare(plainPassword, user.password_hash);

        if (!isValidPassword) {
            throw new AuthFailureError('Email hoặc mật khẩu không đúng');
        }

        const accessToken = createAccessToken({ id: user.id });
        const refreshToken = createRefreshToken({ id: user.id });
        setCookie(res, accessToken, refreshToken);

        new OK({
            message: 'Đăng nhập thành công',
            metadata: user,
        }).send(res);
    }
    async logout(req, res) {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.clearCookie('logged');
        new OK({
            message: 'Đăng xuất thành công',
        }).send(res);
    }
    async forgotPassword(req, res) {
        const { email } = req.body;
        if (!email) {
            throw new BadRequestError('Email là bắt buộc');
        }
        const findUser = await prisma.users.findUnique({
            where: {
                email, 
            },
        });
        if (!findUser) {
            throw new AuthFailureError('Email không tồn tại');
        }
        const generatedOtp = otp.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        console.log('Generated OTP:', generatedOtp);
        try {
            await sendMailForgotPassword(email, generatedOtp);
        } catch (error) {
            throw new BadGatewayError(error.message);
        }
        new OK({
            message: 'Email đặt lại mật khẩu đã được gửi',
        }).send(res);
    }

}

module.exports = new UserController();
