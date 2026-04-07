const axios = require('axios');

const GHN_BASE_URL = process.env.GHN_BASE_URL || 'https://online-gateway.ghn.vn/shiip/public-api';
const DEFAULT_SERVICE_TYPE_ID = Number(process.env.GHN_SERVICE_TYPE_ID || 2);
const DEFAULT_ITEM_WEIGHT = Number(process.env.GHN_DEFAULT_ITEM_WEIGHT || 250);
const DEFAULT_LENGTH = Number(process.env.GHN_DEFAULT_LENGTH || 20);
const DEFAULT_WIDTH = Number(process.env.GHN_DEFAULT_WIDTH || 20);
const DEFAULT_HEIGHT = Number(process.env.GHN_DEFAULT_HEIGHT || 10);

let cachedShopConfig = null;

function getToken() {
    return process.env.GHN_TOKEN?.trim();
}

function normalizeGhnError(error) {
    return error?.response?.data?.message || error?.message || 'Khong the ket noi GHN';
}

function buildHeaders(extraHeaders = {}) {
    const token = getToken();

    if (!token) {
        throw new Error('GHN_TOKEN chua duoc cau hinh');
    }

    return {
        Token: token,
        'Content-Type': 'application/json',
        ...extraHeaders,
    };
}

async function ghnRequest({ method = 'GET', path, data, headers }) {
    const response = await axios({
        method,
        url: `${GHN_BASE_URL}${path}`,
        headers: buildHeaders(headers),
        data,
        timeout: 15000,
    });

    return response.data?.data ?? response.data;
}

async function resolveShopConfig() {
    if (cachedShopConfig) {
        return cachedShopConfig;
    }

    let shopId = Number(process.env.GHN_SHOP_ID || 0);
    let fromDistrictId = Number(process.env.GHN_FROM_DISTRICT_ID || 0);
    let fromWardCode = process.env.GHN_FROM_WARD_CODE?.trim() || '';

    if (!shopId || !fromDistrictId || !fromWardCode) {
        const shopData = await ghnRequest({
            method: 'POST',
            path: '/v2/shop/all',
            data: {
                offset: 0,
                limit: 20,
                client_phone: '',
            },
        });

        const firstShop = shopData?.shops?.[0];

        if (firstShop) {
            if (!shopId) {
                shopId = Number(firstShop._id || 0);
            }

            if (!fromDistrictId) {
                fromDistrictId = Number(firstShop.district_id || 0);
            }

            if (!fromWardCode) {
                fromWardCode = String(firstShop.ward_code || '').trim();
            }
        }
    }

    if (!shopId) {
        throw new Error('Khong tim thay GHN_SHOP_ID hop le');
    }

    if (!fromDistrictId || !fromWardCode) {
        throw new Error(
            'GHN token da hop le nhung shop chua co dia chi lay hang. Vui long cau hinh GHN_FROM_DISTRICT_ID va GHN_FROM_WARD_CODE',
        );
    }

    cachedShopConfig = {
        shopId,
        fromDistrictId,
        fromWardCode,
    };

    return cachedShopConfig;
}

function buildParcelMetrics(items = []) {
    const normalizedItems = Array.isArray(items) ? items : [];
    const totalQuantity = normalizedItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    const safeQuantity = Math.max(1, totalQuantity);

    return {
        weight: Math.max(DEFAULT_ITEM_WEIGHT, safeQuantity * DEFAULT_ITEM_WEIGHT),
        length: DEFAULT_LENGTH,
        width: DEFAULT_WIDTH,
        height: Math.max(DEFAULT_HEIGHT, safeQuantity * 4),
    };
}

function buildFeeItems(items = []) {
    const metrics = buildParcelMetrics(items);

    return (Array.isArray(items) ? items : []).map((item, index) => ({
        name: item.name || `ITEM-${index + 1}`,
        quantity: Number(item.quantity || 1),
        length: metrics.length,
        width: metrics.width,
        height: metrics.height,
        weight: DEFAULT_ITEM_WEIGHT,
    }));
}

async function getAvailableService(toDistrictId) {
    const shopConfig = await resolveShopConfig();
    const services = await ghnRequest({
        method: 'POST',
        path: '/v2/shipping-order/available-services',
        data: {
            shop_id: shopConfig.shopId,
            from_district: shopConfig.fromDistrictId,
            to_district: Number(toDistrictId),
        },
    });

    const preferredService =
        services?.find((service) => Number(service.service_type_id) === DEFAULT_SERVICE_TYPE_ID) || services?.[0];

    if (!preferredService) {
        throw new Error('Khong tim thay dich vu giao hang phu hop cua GHN');
    }

    return preferredService;
}

async function getShippingFeeQuote({ toDistrictId, toWardCode, items = [], insuranceValue = 0 }) {
    const shopConfig = await resolveShopConfig();
    const service = await getAvailableService(toDistrictId);
    const metrics = buildParcelMetrics(items);
    const feeItems = buildFeeItems(items);

    const data = await ghnRequest({
        method: 'POST',
        path: '/v2/shipping-order/fee',
        headers: {
            ShopId: String(shopConfig.shopId),
        },
        data: {
            from_district_id: shopConfig.fromDistrictId,
            from_ward_code: shopConfig.fromWardCode,
            service_id: Number(service.service_id),
            service_type_id: Number(service.service_type_id),
            to_district_id: Number(toDistrictId),
            to_ward_code: String(toWardCode),
            insurance_value: Math.max(0, Math.round(Number(insuranceValue || 0))),
            weight: metrics.weight,
            length: metrics.length,
            width: metrics.width,
            height: metrics.height,
            items: feeItems,
        },
    });

    return {
        shippingFee: Number(data?.total || 0),
        serviceId: Number(service.service_id),
        serviceTypeId: Number(service.service_type_id),
        serviceName: service.short_name || 'GHN',
        metrics,
    };
}

async function getProvinces() {
    return ghnRequest({
        method: 'GET',
        path: '/master-data/province',
    });
}

async function getDistricts(provinceId) {
    return ghnRequest({
        method: 'POST',
        path: '/master-data/district',
        data: {
            province_id: Number(provinceId),
        },
    });
}

async function getWards(districtId) {
    return ghnRequest({
        method: 'POST',
        path: '/master-data/ward',
        data: {
            district_id: Number(districtId),
        },
    });
}

module.exports = {
    getProvinces,
    getDistricts,
    getWards,
    getShippingFeeQuote,
    resolveShopConfig,
    normalizeGhnError,
};
