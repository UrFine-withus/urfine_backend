const express = require('express');
const router = express.Router();
const multer = require('multer');
const {uploadFileData} = require('../controllers/userFiles.controller');
const upload = multer();
// Define your routes
// router.get('/getallfiles',getAllFilesData);
router.post('/upload/prescription', upload.single('prescription'), uploadFileData);
// router.post('/getfile',getFileData);
// Add more routes as needed

module.exports = router;








