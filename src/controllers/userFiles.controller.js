// Import any required services or models here

const { uploadFile} = require("../services/userFiles.service");

// Define your controller methods

const uploadFileData = async (req, res) => {
  try {
    const user = await uploadFile();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
uploadFileData
};
