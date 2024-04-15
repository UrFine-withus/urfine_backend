const express = require('express');
const router = express.Router();
const {uploadFileData} = require('../controllers/userFiles.controller');
// const upload = multer();
// Define your routes

router.post('/upload/prescription', uploadFileData);

// app.post('/upload', upload.single('file'), (req, res) => {
    // res.json({ file: req.file });

// router.post('/getfile',getFileData);
// Add more routes as needed

module.exports = router;








