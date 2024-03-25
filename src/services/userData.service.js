// Import any required models here
const {UserModel} = require('../models');

// Define your service methods
const getUser = async () => {
  try {
    console.log('Get user function is working')
    return await UserModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const createUser = async (req) => {
  try {
    const user = new UserModel({ ...req});
    return await user.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
  getUser,
  createUser
};
