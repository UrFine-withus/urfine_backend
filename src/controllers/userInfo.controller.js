// Import any required services or models here

const { addUserInfo} = require("../services/userInfo.service");

// Define your controller methods

const addUserInfoData = async (req, res) => {
  try {
    console.log("controller is working");
    const user = await addUserInfo(req.body);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
    addUserInfoData
  };
  