// Import any required modules here
const { GridFsStorage } = require('multer-gridfs-storage');
const fs = require('fs');
const mongoose = require('mongoose');

// Define your service methods
const uploadFile = async (userId,file) => {
  try {
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'prescriptions' });

    const uploadStream = gfs.openUploadStream(file.originalname);
    const fileReadStream = fs.createReadStream(file.path); // Create readable stream

    // Pipe the file read stream to the upload stream
    fileReadStream.pipe(uploadStream);

    return new Promise((resolve, reject) => {
      uploadStream.on('error', (error) => {
        reject(error);
      });
      uploadStream.on('close', () => {
        resolve({
            _userID:userId,
          id: uploadStream.id,
          filename: uploadStream.filename,
          contentType: file.mimetype,
        });
      });
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

const getFile = async (fileId) => {
  try {
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'prescriptions' });

    const downloadStream = gfs.openDownloadStream(new mongoose.Types.ObjectId(fileId));
    return downloadStream;
  } catch (error) {
    console.error('Error fetching file:', error);
    throw error;
  }
};

module.exports = {
  uploadFile,
  getFile
};


















