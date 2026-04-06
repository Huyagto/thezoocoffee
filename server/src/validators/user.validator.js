'use strict';

const { BadRequestError, UnprocessableEntityError } = require('../core/error.response');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(0|\+84)[0-9]{9}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,50}$/;

const validateRegister = (req, res, next) => {
    try {
        const { name, email, password, phone, address } = req.body;

        if (!name || typeof name !== 'string') {
            throw new BadRequestError('Ten la bat buoc');
        }

        const cleanName = name.trim();

        if (cleanName.length < 2) {
            throw new BadRequestError('Ten qua ngan');
        }

        if (cleanName.length > 100) {
            throw new BadRequestError('Ten qua dai');
        }

        if (!email || typeof email !== 'string') {
            throw new BadRequestError('Email la bat buoc');
        }

        if (!emailRegex.test(email.trim())) {
            throw new UnprocessableEntityError('Email khong dung dinh dang');
        }

        if (!password || typeof password !== 'string') {
            throw new BadRequestError('Mat khau la bat buoc');
        }

        if (!passwordRegex.test(password)) {
            throw new UnprocessableEntityError('Mat khau phai tu 8-50 ky tu, gom chu va so');
        }

        if (phone && !phoneRegex.test(phone.trim())) {
            throw new UnprocessableEntityError('So dien thoai khong hop le');
        }

        if (address && address.trim().length < 5) {
            throw new BadRequestError('Dia chi qua ngan');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateLogin = (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new BadRequestError('Email va mat khau la bat buoc');
        }

        if (!emailRegex.test(email.trim())) {
            throw new UnprocessableEntityError('Email khong dung dinh dang');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateForgotPassword = (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            throw new BadRequestError('Email la bat buoc');
        }

        if (!emailRegex.test(email.trim())) {
            throw new UnprocessableEntityError('Email khong dung dinh dang');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateResetPassword = (req, res, next) => {
    try {
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            throw new BadRequestError('Mat khau cu va mat khau moi la bat buoc');
        }

        if (!passwordRegex.test(newPassword)) {
            throw new UnprocessableEntityError('Mat khau moi khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateUpdateProfile = (req, res, next) => {
    try {
        const { name, phone, address } = req.body;

        if (!name || typeof name !== 'string') {
            throw new BadRequestError('Ten la bat buoc');
        }

        const cleanName = name.trim();

        if (cleanName.length < 2) {
            throw new BadRequestError('Ten qua ngan');
        }

        if (cleanName.length > 100) {
            throw new BadRequestError('Ten qua dai');
        }

        if (phone && !phoneRegex.test(phone.trim())) {
            throw new UnprocessableEntityError('So dien thoai khong hop le');
        }

        if (address && address.trim().length < 5) {
            throw new BadRequestError('Dia chi qua ngan');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateUpdateUserRole = (req, res, next) => {
    try {
        const { role } = req.body;

        if (!role || typeof role !== 'string') {
            throw new BadRequestError('Vai tro la bat buoc');
        }

        const validRoles = ['customer', 'admin'];

        if (!validRoles.includes(role)) {
            throw new BadRequestError('Vai tro khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    validateRegister,
    validateLogin,
    validateForgotPassword,
    validateResetPassword,
    validateUpdateProfile,
    validateUpdateUserRole,
};
