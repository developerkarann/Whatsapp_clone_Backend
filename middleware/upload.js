const dotenv = require('dotenv').config();

const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage');
const url = process.env.DATABASE

const storage = new GridFsStorage({
    url,
    file: (req, file) => {
        const match = ['image/jpg', 'image/png'];
        if (match.indexOf(file.mimetype === -1)) {
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName: 'photos',
            fileName: `${Date.now()}-file-${file.originalname}`
        }
    }
});

module.exports = multer({storage});