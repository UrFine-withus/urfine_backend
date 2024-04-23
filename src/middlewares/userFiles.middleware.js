// services.js
const crypto = require('crypto');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');


function initializeGridFsConnection(existingConnection) {
    
  // Initialize GridFS using the existing connection
 const storage = new GridFsStorage({
    db: existingConnection.connection.db, // Pass the existing connection's database object
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'prescription'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  return  getUploadMiddleware(storage)
}

function getUploadMiddleware(store) {
     console.log("mutler is working ",store)
  // Return multer middleware with the initialized GridFS storage
  return multer({ storage: store });
}

module.exports = { initializeGridFsConnection, getUploadMiddleware };
