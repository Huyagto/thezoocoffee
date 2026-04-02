const { ConflictRequestError, AuthFailureError } = require('../core/error.response');
const bcrypt = require('bcrypt');
const prisma = require('../config/mysqlDB');
const { Created, OK } = require('../core/success.response');
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
        const { name, email, phone, password, address } = req.body;
        const findUser = await prisma.users.findUnique({
            where: {
                email,
            },
        });
        if (findUser) {
            throw new ConflictRequestError('Email đã tồn tại');
        }
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound);
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
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            throw new AuthFailureError('Email hoặc mật khẩu không đúng');
        }

        const isValidPassword = await bcrypt.compare(password, user.password_hash);

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
}

module.exports = new UserController();
