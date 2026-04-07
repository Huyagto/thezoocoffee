const { BadRequestError } = require('../../core/error.response');
const { OK } = require('../../core/success.response');
const {
    getProvinces,
    getDistricts,
    getWards,
    getShippingFeeQuote,
    normalizeGhnError,
} = require('../../services/ghn.service');

class ShippingController {
    async getProvinces(req, res) {
        try {
            const provinces = await getProvinces();

            new OK({
                message: 'Lay danh sach tinh thanh cong',
                metadata: provinces,
            }).send(res);
        } catch (error) {
            throw new BadRequestError(normalizeGhnError(error));
        }
    }

    async getDistricts(req, res) {
        const provinceId = Number(req.query.provinceId);

        if (Number.isNaN(provinceId) || provinceId <= 0) {
            throw new BadRequestError('provinceId khong hop le');
        }

        try {
            const districts = await getDistricts(provinceId);

            new OK({
                message: 'Lay danh sach quan huyen thanh cong',
                metadata: districts,
            }).send(res);
        } catch (error) {
            throw new BadRequestError(normalizeGhnError(error));
        }
    }

    async getWards(req, res) {
        const districtId = Number(req.query.districtId);

        if (Number.isNaN(districtId) || districtId <= 0) {
            throw new BadRequestError('districtId khong hop le');
        }

        try {
            const wards = await getWards(districtId);

            new OK({
                message: 'Lay danh sach phuong xa thanh cong',
                metadata: wards,
            }).send(res);
        } catch (error) {
            throw new BadRequestError(normalizeGhnError(error));
        }
    }

    async quoteShippingFee(req, res) {
        const { toDistrictId, toWardCode, items, insuranceValue } = req.body;
        const normalizedDistrictId = Number(toDistrictId);

        if (Number.isNaN(normalizedDistrictId) || normalizedDistrictId <= 0) {
            throw new BadRequestError('toDistrictId khong hop le');
        }

        if (!String(toWardCode || '').trim()) {
            throw new BadRequestError('toWardCode la bat buoc');
        }

        try {
            const quote = await getShippingFeeQuote({
                toDistrictId: normalizedDistrictId,
                toWardCode: String(toWardCode).trim(),
                items,
                insuranceValue,
            });

            new OK({
                message: 'Tinh phi van chuyen thanh cong',
                metadata: quote,
            }).send(res);
        } catch (error) {
            throw new BadRequestError(normalizeGhnError(error));
        }
    }
}

module.exports = new ShippingController();
