// Import any required modules here
const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

// Define your service methods
    var Storage = new GridFsStorage({
      url: process.env.MONGODB_URL,
      options: { useNewUrlParser: true, useUnifiedTopology: true },
      file: (file) => {
        const match = ["image/png", "image/jpeg"];
    
        if (match.indexOf(file.mimetype) === -1) {
          const filename = `${Date.now()}-prescriptions-${file.originalname}`;
          return filename;
        }
    
        return {
          bucketName: dbConfig.imgBucket,
          filename: `${Date.now()}-prescriptions-${file.originalname}`
        };
      }
    });
    var uploadFileitems = multer({ storage: Storage }).single("file");
const uploadFiles = util.promisify(uploadFileitems);

// const getFile = async (fileId) => {
//   try {
//     const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'prescriptions' });

//     const downloadStream = gfs.openDownloadStream(new mongoose.Types.ObjectId(fileId));
//     return downloadStream;
//   } catch (error) {
//     console.error('Error fetching file:', error);
//     throw error;
//   }
// };

module.exports = {
  uploadFiles,
  // getFile
};


















