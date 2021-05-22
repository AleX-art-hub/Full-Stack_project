const multer = require('multer');
const path = require('path');
const {staticPath} = require('./../config/config');
const upload = multer({dest: path.basename(staticPath, '/images')});
module.exports = upload;
