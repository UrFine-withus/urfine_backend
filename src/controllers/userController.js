// Import any required services or models here
const UserService = require('../services/userService');

// Define your controller methods
exports.getUser = async (req, res) => {
  try {
    const User = await UserService.getUser();
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await UserService.createUser(name);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};