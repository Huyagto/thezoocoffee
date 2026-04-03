'use strict';

const bcrypt = require('bcrypt');
const prisma = require('../config/prisma');

const {
    ConflictRequestError,
    AuthFailureError
} = require('../core/error.response');

const SALT_ROUNDS = 10;
const DEFAULT_ROLE = 'customer';

const normalizeEmail = (email) =>
    email.trim().toLowerCase();

const normalizeString = (value) =>
    value?.trim() || null;

const registerUser = async ({
    name,
    email,
    password,
    phone,
    address
}) => {
    const normalizedEmail =
        normalizeEmail(email);

    const existingUser =
        await prisma.users.findUnique({
            where: {
                email: normalizedEmail
            }
        });

    if (existingUser) {
        throw new ConflictRequestError(
            'Email đã tồn tại'
        );
    }

    const password_hash =
        await bcrypt.hash(
            password,
            SALT_ROUNDS
        );

    return prisma.users.create({
        data: {
            name: name.trim(),
            email: normalizedEmail,
            phone: normalizeString(phone),
            address: normalizeString(address),
            password_hash,
            role: DEFAULT_ROLE
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            role: true,
            created_at: true
        }
    });
};

const loginUser = async ({
    email,
    password
}) => {
    const user =
        await prisma.users.findUnique({
            where: {
                email:
                    normalizeEmail(email)
            }
        });

    if (!user) {
        throw new AuthFailureError(
            'Email hoặc mật khẩu không đúng'
        );
    }

    const isValidPassword =
        await bcrypt.compare(
            password,
            user.password_hash
        );

    if (!isValidPassword) {
        throw new AuthFailureError(
            'Email hoặc mật khẩu không đúng'
        );
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
};

module.exports = {
    registerUser,
    loginUser
};