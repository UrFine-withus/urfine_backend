// Import any required models here
const multer = require("multer")
const { GridFsStorage } = require("multer-gridfs-storage")
// const {} = require('../models');

// Define your service methods


// // Create a storage object with a given configuration
// const storage = new GridFsStorage({
//     url,
//     file: (req, file) => {
//       //If it is an image, save to photos bucket
//       if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//         return {
//           bucketName: "prescription",
//           filename: `${Date.now()}_${file.originalname}`,
//         }
//       } else {
//         //Otherwise save to default bucket
//         return `${Date.now()}_${file.originalname}`
//       }
//     },
//   })





















const uploadFile = async (req) => {
  try {
    const userInfo = new  UserInfoModel({ ...req});
    return await userInfo.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
    uploadFile
}