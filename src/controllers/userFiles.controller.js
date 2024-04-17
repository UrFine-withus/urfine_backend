// controllers.js
const { getUploadMiddleware } = require('../middlewares/userFiles.middleware');
const multer = require('multer');
// Initialize upload middleware
const upload =getUploadMiddleware();
console.log("upload",upload)
// Controller function to handle file uploads
function uploadFileData(req, res) {
  upload.single('prescription')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      return res.status(500).json({ error: 'Multer error occurred', message: err.message });
    } else if (err) {
      // An unknown error occurred when uploading
      return res.status(500).json({ error: 'An unknown error occurred', message: err.message });
    }
    // File uploaded successfully
    return res.status(200).json({ message: 'File uploaded successfully'});
  });
}

module.exports = { uploadFileData };
