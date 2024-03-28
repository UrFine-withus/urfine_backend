// Import any required services or models here

const { getUserInfo} = require("../services/userInfo.service");

// Define your controller methods

const getUserInfoData = async (req, res) => {
  try {
    const user = await getUserInfo();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
    getUserInfoData,
  };
  