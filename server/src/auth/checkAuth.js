const jwt = require('jsonwebtoken');

const asyncHandler = (fn) => (req, res, next) => {
    return fn(req, res, next).catch(next);
}
const createAccessToken = (payload) => {
    return jwt.sign(payload , process.env.JWT_SECRET,
        { expiresIn: '1h' , algorithm: 'HS256'});
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, 
        { expiresIn: '7d' , algorithm: 'HS256'});
}
const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}
module.exports = { asyncHandler, createAccessToken, createRefreshToken, verifyToken };