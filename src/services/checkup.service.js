
const {CheckupModel} = require('../models');

const getAllCheckup = async (req, res) => {
    try {
        const checkup = await CheckupModel.find({deleted:  {$exists: false }, isAccepted: false});
        return checkup;
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAcceptedCheckup = async (req, res) => {
    try {
        const checkup = await CheckupModel.find({isAccepted: true});
        return checkup;
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const CheckupCount = async (req, res) => {
    try {
        const checkupCount = await CheckupModel.find({deleted:  {$exists: false }, isAccepted: false}).count();
        return {checkupCount};
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const createCheckup = async (req, res) => {
    try {
        // console.log('Create checkup function is working');
        const checkup = new CheckupModel({...req});
        return await checkup.save();
    } catch (error) {
        console.error('Error creating checkup:', error);
        throw error;
    }

}

const deleteCheckup = async (req_id,req_deletedBy) => {
    try {
        const checkup = await CheckupModel.findByIdAndUpdate({_id  :req_id}, 
        {$set:  {deleted:{
            deletedBy: req_deletedBy,
            deletedAt: Date.now()
        }}});
        if(checkup){
            return {
                message: "Checkup deleted successfully"
            };
        }
    } catch (error) {
      console.error('Error deleting checkup:', error);
      throw error;
    }
  
}

const acceptCheckup = async (req_id) => {
    try {
        const checkup = await CheckupModel.findByIdAndUpdate({_id :req_id}, 
        {$set:  {isAccepted: true}});
        if(checkup){
            return {
                message: "Checkup accepted successfully"
            };
        }
    } catch (error) {
      console.error('Error accepting checkup:', error);
      throw error;
    }
  
}

module.exports = {
    getAllCheckup,
    createCheckup,
    deleteCheckup,
    getAcceptedCheckup,
    acceptCheckup,
    CheckupCount
}