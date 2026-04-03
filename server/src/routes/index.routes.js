const userRoutes = require('./user/user.routes');

function routes(app) {
    app.use('/api/user', userRoutes);
}

module.exports = routes;
