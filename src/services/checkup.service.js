
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
        const checkupCount = await CheckupModel.find({deleted:  {$exists: false },isAccepted: false}).count();
        return {checkupCount};
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const createCheckup = async (_userID,req) => {
    try {
        // console.log('Create checkup function is working');
        const isEmptyReq = Object.values(req).every(value => value === '');
            if (isEmptyReq) {
                return {
                    message: "Checkup request details cannot be empty"
                };
            }
                 // Get the current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        // Define the start and end of the current day
        const startOfDay = new Date(currentDate);
        const endOfDay = new Date(currentDate);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
        
        // Check if there is an existing History log for the user on the current day
        const existingCheckuprequest = await CheckupModel.findOne({
            _userID,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });   
        if (existingCheckuprequest) {
            return {
                message: "A Checkup request already exists for this user on the current day"
            };
        } else {
        const checkup = new CheckupModel({_userID,...req});
        return await checkup.save();
        }
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

const acceptCheckup = async (req) => {
    try {
        const req_id = req.req_id;
        const req_date = req.req_date;
        const checkup = await CheckupModel.findByIdAndUpdate({_id :req_id}, 
        {$set:  {
            isAccepted: true,
            sheduledTo:req_date
        }});
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