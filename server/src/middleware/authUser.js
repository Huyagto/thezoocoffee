const AuthFailureError = require('../core/error.response')
const { verifyToken } = require('../auth/checkAuth');

const authUser = async (req, res, next) => {
        try {
            const accessToken = req.cookies.accessToken;
            if(!accessToken) {
                throw new AuthFailureError('Vui lòng đăng nhập lại để truy cập');
            }
            const decoded = verifyToken(accessToken);
            if(!decoded){
                throw new AuthFailureError('Vui lòng đăng nhập lại để truy cập')
            }
            req.user = decoded;
            next();
        } catch (error) {
            next(error);
        }
}
module.exports = { authUser };
