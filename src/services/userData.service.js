// Import any required models here
const {UserDataModel,UserInfoModel} = require('../models');

// Define your service methods
const getUser = async () => {
  try {
    console.log('Get user function is working')
    return await  UserDataModel.find();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const createUser = async (req) => {
  try {
    const user = new  UserDataModel({ ...req});
    return await user.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const checkUser = async (req) => {
  try {
    console.log('Check user function is working')
    // console.log(req);
    let User= await UserDataModel.findOne(req);
    
    if (User) {
      const user = await UserInfoModel.findOne(req);
      if (user) {
        const { name } = user;
        // console.log(name);
        return name;
      } else {
        return res.status(400).send("User details not found");
      }
    }
    else{
      return res.status(400).send("User not found");
    }
  }
  catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

const getUserCount = async () => {
  try {
    console.log('Get user count function is working');
    const userCount = await UserDataModel.find().count();
    return userCount;
     
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

}
module.exports = {
  getUser,
  createUser,
  checkUser,
  getUserCount
};
