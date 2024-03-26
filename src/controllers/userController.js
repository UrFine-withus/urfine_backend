// Import any required services or models here

const { getUser,createUser,checkUser } = require("../services/userData.service");

// Define your controller methods

const getUserData = async (req, res) => {
  try {
    const user = await getUser();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUserData = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await createUser(req.body)
    res.send(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const checkUserData = async (req, res) => {
  try {
    const _userID = req.query._userID;
    console.log(req.query._userID);
    const user = await checkUser({_userID});
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
module.exports = {
  getUserData,
  createUserData,
  checkUserData
};
