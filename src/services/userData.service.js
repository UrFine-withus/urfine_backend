// Import any required models here
const {UserDataModel,UserInfoModel,HistoryLogModel,CheckupModel} = require('../models');

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


const checkUser = async (_userID,fcm_id) => {
  try {
        let UserData = await UserDataModel.findOne({ _userID });

        if (UserData) {
          const _id=UserData._id.toString();
          // console.log("hi",_id);
          if (UserData?.fcm_id !== fcm_id) {
            UserData.fcm_id = fcm_id;
            console.log("fcm_id updated",UserData);
          
            await UserDataModel.findByIdAndUpdate({_id}, {$set: { fcm_id: fcm_id }});
            console.log("fcm_id updated");
          } else {
            await UserDataModel.findByIdAndUpdate({_id}, {$set: { fcm_id: fcm_id }});
            console.log("fcm_id added",UserData);
          }
        } else {
          throw new Error("User not found");
        }
        const user = await UserInfoModel.findOne({_userID});
        if (user) {
          const { name } = user;
          // console.log(name);
          return {
            name:name,
            message:"User details found"
          };
        } 
        else {
          throw new Error("User details not found");
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
const deleteUser = async (req) => {
  try {
    console.log('Delete user function is working')
    // console.log(req);
    const user = await UserDataModel.findOne(req);
    
    if (user) {
      await UserDataModel.deleteOne(req);
      await UserInfoModel.deleteOne(req);
      await HistoryLogModel.deleteMany(req);
      await CheckupModel.deleteOne(req);
      return "User details deleted successfully";
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}
module.exports = {
  getUser,
  createUser,
  checkUser,
  getUserCount,
  deleteUser
};
