require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT;
const routes = require('./routes/index.routes');
const cookieParser = require('cookie-parser');

const cor = require('cors');
app.use(cor());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
routes(app);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: err.message || 'Lỗi Server',
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
