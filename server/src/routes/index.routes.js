const userRoutes = require('./user/user.routes');
const userCartRoutes = require('./user/cart.user.routes');
const userOrderRoutes = require('./user/order.user.routes');
const userPaymentRoutes = require('./user/payment.user.routes');
const userCouponRoutes = require('./user/coupon.user.routes');
const adminUserRoutes = require('./admin/user.admin.routes');
const adminCategoryRoutes = require('./admin/category/category.admin.routes');
const adminProductRoutes = require('./admin/product/product.admin.routes');
const adminInventoryRoutes = require('./admin/inventory/inventory.admin.routes');
const adminRecipeRoutes = require('./admin/recipe/recipe.admin.routes');
const adminCouponRoutes = require('./admin/coupon/coupon.admin.routes');
const adminOrderRoutes = require('./admin/order/order.admin.routes');
const adminPaymentRoutes = require('./admin/payment/payment.admin.routes');
const adminUploadRoutes = require('./admin/upload/upload.admin.routes');
const categoryRoutes = require('./category/category.routes');
const productRoutes = require('./product/product.routes');
const paymentRoutes = require('./payment/payment.routes');
const shippingRoutes = require('./shipping/shipping.routes');

function routes(app) {
    app.use('/api/user', userRoutes);
    app.use('/api/user/cart', userCartRoutes);
    app.use('/api/user/orders', userOrderRoutes);
    app.use('/api/user/payments', userPaymentRoutes);
    app.use('/api/user/coupons', userCouponRoutes);
    app.use('/api/admin', adminUserRoutes);
    app.use('/api/admin/categories', adminCategoryRoutes);
    app.use('/api/admin/products', adminProductRoutes);
    app.use('/api/admin/inventory', adminInventoryRoutes);
    app.use('/api/admin/recipes', adminRecipeRoutes);
    app.use('/api/admin/coupons', adminCouponRoutes);
    app.use('/api/admin/orders', adminOrderRoutes);
    app.use('/api/admin/payments', adminPaymentRoutes);
    app.use('/api/admin/uploads', adminUploadRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/payments', paymentRoutes);
    app.use('/api/shipping', shippingRoutes);
}

module.exports = routes;
