const uploadController = require('../../../controller/upload/upload.controller');

module.exports = {
    uploadProductImage: uploadController.uploadProductImage.bind(uploadController),
};
