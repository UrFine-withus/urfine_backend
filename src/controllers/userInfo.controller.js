// Import any required services or models here

const { addUserInfo,getUserInfo} = require("../services/userInfo.service");

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
const getUserInfoData = async (req, res) => {
  try {
    const userID=req.query._userID;
    console.log("controller is working",userID);
    const user = await getUserInfo(userID);
    // console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    addUserInfoData,
    getUserInfoData
  };
  