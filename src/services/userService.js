// Import any required models here
const Users = require('../models/userModels');

// Define your service methods
exports.getUser = async () => {
  return await Users.find();

};

exports.createUser = async (name) => {
  const User = new Users({ name });
  return await User.save();
};