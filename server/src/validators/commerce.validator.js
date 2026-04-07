'use strict';

const { BadRequestError, UnprocessableEntityError } = require('../core/error.response');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(0|\+84)[0-9]{9}$/;
const validPaymentMethods = ['cod', 'momo', 'vnpay', 'zalopay'];

function ensurePositiveInteger(value, message) {
    const normalized = Number(value);

    if (!Number.isInteger(normalized) || normalized <= 0) {
        throw new BadRequestError(message);
    }

    return normalized;
}

function ensureNonNegativeNumber(value, message) {
    const normalized = Number(value);

    if (Number.isNaN(normalized) || normalized < 0) {
        throw new BadRequestError(message);
    }

    return normalized;
}

const validateAddToCart = (req, res, next) => {
    try {
        ensurePositiveInteger(req.body.productId, 'productId khong hop le');

        if (req.body.quantity !== undefined) {
            ensurePositiveInteger(req.body.quantity, 'So luong san pham khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateUpdateCartQuantity = (req, res, next) => {
    try {
        ensurePositiveInteger(req.params.id, 'ID san pham khong hop le');

        const quantity = Number(req.body.quantity);

        if (!Number.isInteger(quantity) || quantity < 0) {
            throw new BadRequestError('So luong cap nhat khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateCheckout = (req, res, next) => {
    try {
        const { shippingInfo, paymentMethod, items, couponCode } = req.body;

        if (!shippingInfo || typeof shippingInfo !== 'object' || Array.isArray(shippingInfo)) {
            throw new BadRequestError('Thong tin giao hang khong hop le');
        }

        const requiredShippingFields = [
            ['fullName', 'Ho ten nguoi nhan la bat buoc'],
            ['phone', 'So dien thoai nguoi nhan la bat buoc'],
            ['email', 'Email nguoi nhan la bat buoc'],
            ['address', 'Dia chi giao hang la bat buoc'],
            ['provinceName', 'Tinh thanh la bat buoc'],
            ['districtName', 'Quan huyen la bat buoc'],
            ['wardName', 'Phuong xa la bat buoc'],
            ['toWardCode', 'toWardCode khong hop le'],
        ];

        requiredShippingFields.forEach(([field, message]) => {
            if (!String(shippingInfo[field] || '').trim()) {
                throw new BadRequestError(message);
            }
        });

        if (!phoneRegex.test(String(shippingInfo.phone).trim())) {
            throw new UnprocessableEntityError('So dien thoai nguoi nhan khong hop le');
        }

        if (!emailRegex.test(String(shippingInfo.email).trim())) {
            throw new UnprocessableEntityError('Email nguoi nhan khong hop le');
        }

        if (String(shippingInfo.address).trim().length < 5) {
            throw new BadRequestError('Dia chi giao hang qua ngan');
        }

        ensurePositiveInteger(shippingInfo.toDistrictId, 'toDistrictId khong hop le');

        if (shippingInfo.note !== undefined && String(shippingInfo.note).trim().length > 500) {
            throw new BadRequestError('Ghi chu qua dai');
        }

        if (!validPaymentMethods.includes(String(paymentMethod || '').toLowerCase())) {
            throw new BadRequestError('Phuong thuc thanh toan khong hop le');
        }

        if (!Array.isArray(items) || items.length === 0) {
            throw new BadRequestError('Don hang phai co it nhat mot san pham');
        }

        items.forEach((item, index) => {
            ensurePositiveInteger(item?.productId, `productId tai vi tri ${index + 1} khong hop le`);
            ensurePositiveInteger(item?.quantity, `So luong tai vi tri ${index + 1} khong hop le`);
        });

        if (couponCode !== undefined && couponCode !== null && String(couponCode).trim().length > 50) {
            throw new BadRequestError('Ma giam gia khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateCouponCode = (req, res, next) => {
    try {
        const { code, subtotal } = req.body;

        if (!String(code || '').trim()) {
            throw new BadRequestError('Ma giam gia la bat buoc');
        }

        ensureNonNegativeNumber(subtotal, 'Subtotal khong hop le');
        next();
    } catch (error) {
        next(error);
    }
};

const validateCreatePayment = (req, res, next) => {
    try {
        ensurePositiveInteger(req.params.orderId || req.body.orderId, 'ID don hang khong hop le');

        const paymentMethod = String(req.body.paymentMethod || req.body.typePayment || '').toLowerCase();

        if (!validPaymentMethods.includes(paymentMethod)) {
            throw new BadRequestError('Phuong thuc thanh toan khong hop le');
        }

        if (paymentMethod === 'cod') {
            throw new BadRequestError('COD khong can tao lien ket thanh toan');
        }

        next();
    } catch (error) {
        next(error);
    }
};

const validateShippingFeeQuote = (req, res, next) => {
    try {
        const { toDistrictId, toWardCode, items, insuranceValue } = req.body;

        ensurePositiveInteger(toDistrictId, 'toDistrictId khong hop le');

        if (!String(toWardCode || '').trim()) {
            throw new BadRequestError('toWardCode la bat buoc');
        }

        if (!Array.isArray(items) || items.length === 0) {
            throw new BadRequestError('Danh sach san pham tinh phi giao hang khong hop le');
        }

        items.forEach((item, index) => {
            if (!String(item?.name || '').trim()) {
                throw new BadRequestError(`Ten san pham tai vi tri ${index + 1} khong hop le`);
            }

            ensurePositiveInteger(item?.quantity, `So luong san pham tai vi tri ${index + 1} khong hop le`);
        });

        if (insuranceValue !== undefined && insuranceValue !== null) {
            ensureNonNegativeNumber(insuranceValue, 'insuranceValue khong hop le');
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    validateAddToCart,
    validateUpdateCartQuantity,
    validateCheckout,
    validateCouponCode,
    validateCreatePayment,
    validateShippingFeeQuote,
};
