// Import any required services or models here

const { uploadFile} = require("../services/userFiles.service");

// Define your controller methods

const uploadFileData = async (req, res) => {
  try {
    const file = req.file;
    const userId=req.query._userID
    console.log("file",file)
    console.log("userId",userId)
    const uploadedImage = await uploadFile(userId,file);
    res.send({
      message: 'File uploaded successfully!',
      id: uploadedImage.id,
      name: uploadedImage.filename,
      contentType: uploadedImage.contentType,
      createdAt: uploadedImage.createdAt
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = {
uploadFileData
};
