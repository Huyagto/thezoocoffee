const userRoutes = require('./user/user.routes');
const categoryRoutes = require('./category/category.routes');
const productRoutes = require('./product/product.routes');
const uploadRoutes = require('./upload/upload.routes');
const inventoryRoutes = require('./inventory/inventory.routes');
const recipeRoutes = require('./recipe/recipe.routes');
const orderRoutes = require('./order/order.routes');
const paymentRoutes = require('./payment/payment.routes');
const cartRoutes = require('./cart/cart.routes');
const couponRoutes = require('./coupon/coupon.routes');

function routes(app) {
    app.use('/api/user', userRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/uploads', uploadRoutes);
    app.use('/api/inventory', inventoryRoutes);
    app.use('/api/recipes', recipeRoutes);
    app.use('/api/orders', orderRoutes);
    app.use('/api/payments', paymentRoutes);
    app.use('/api/cart', cartRoutes);
    app.use('/api/coupons', couponRoutes);
}

module.exports = routes;
