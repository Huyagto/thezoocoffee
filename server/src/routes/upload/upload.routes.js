const express = require('express');

const { asyncHandler } = require('../../auth/checkAuth');
const { authUser } = require('../../middleware/authUser');
const { requireAdmin } = require('../../middleware/requireAdmin');
const { uploadImage } = require('../../middleware/uploadImage');
const uploadController = require('../../controller/upload/upload.controller');

const router = express.Router();

router.post(
    '/image',
    authUser,
    requireAdmin,
    uploadImage.single('image'),
    asyncHandler(uploadController.uploadProductImage),
);

module.exports = router;
