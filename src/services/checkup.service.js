const axios = require('axios');
const {CheckupRequestModel,CheckupResultModel,UserDataModel} = require('../models');

const getAllCheckupRequest = async (req, res) => {
    try {
        const checkup = await CheckupRequestModel.find({deleted:  {$exists: false }, isAccepted: false});
        return checkup;
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAcceptedCheckupRequest = async (req, res) => {
    try {
        const checkup = await CheckupRequestModel.find({isAccepted: true});
        return checkup;
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const CheckupRequestCount = async (req, res) => {
    try {
        const checkupCount = await CheckupRequestModel.find({deleted:  {$exists: false },isAccepted: false}).count();
        return {checkupCount};
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const createCheckupRequest = async (_userID,req) => {
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
        const existingCheckuprequest = await CheckupRequestModel.findOne({
            _userID,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });   
        if (existingCheckuprequest) {
            return {
                message: "A Checkup request already exists for this user on the current day"
            };
        } else {
        const checkup = new CheckupRequestModel({_userID,...req});
        return await checkup.save();
        }
    } catch (error) {
        console.error('Error creating checkup:', error);
        throw error;
    }

}

const deleteCheckupRequest = async (req_id,req_deletedBy) => {
    try {
        const checkup = await CheckupRequestModel.findByIdAndUpdate({_id  :req_id}, 
        {$set:  {deleted:{
            deletedBy: req_deletedBy,
            deletedAt: Date.now()
        }}}
    );
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

const acceptCheckupRequest = async (req) => {
    try {
        const req_id = req.req_id;
        const req_date = req.req_date;
        console.log(req_id,req_date);
        const checkup = await CheckupRequestModel.findByIdAndUpdate({_id :req_id}, 
        {$set:  {
            isAccepted: true,
            sheduledTo:req_date
        }});
        if(checkup){
            const _userID = checkup._userID;
            console.log(_userID);
            const Userdata= await UserDataModel.findOne({_userID});
            if(Userdata){
                const registration = [Userdata.fcm_id];
                await sendNotifiaction(registration, 'Checkup Request Accepted', 'Your checkup request has been accepted');
                console.log('notification sented successfully');
            }
            return {
                message: "Checkup accepted successfully"
            };
        }
    } catch (error) {
      console.error('Error accepting checkup:', error);
      throw error;
    }
  
}
const createCheckupResult = async (_userID,req) => {
    try {
        const isEmptyReq = Object.values(req).every(value => value === '');
        if (isEmptyReq) {
            return {
                message: "Checkup result details cannot be empty"
            };
        }
        const checkupResult = new CheckupResultModel({_userID,...req});
        return await checkupResult.save();
    } catch (error) {
        console.error('Error creating checkup result:', error);
        throw error;
    }

}
const updateCheckupResult = async (_id,req) => {
    try {
        const checkupResult = await CheckupResultModel.findByIdAndUpdate({_id}, 
        {$set:  req});
        if(checkupResult){
            return {
                message: "Checkup result updated successfully"
            };
        }
    } catch (error) {
      console.error('Error updating checkup result:', error);
      throw error;
    }
  

}

const getAllCheckupResult = async (_userID) => {
    try {
        const checkupResult = await CheckupResultModel.find({_userID});
        return {checkupResult};
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getUpcomingAcceptedCheckupRequest = async (req, res) => {
    try {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = currentDate.getFullYear();
        
        const formattedCurrentDate = `${day}-${month}-${year}`;
        console.log(formattedCurrentDate);
        const UpcomingData = await CheckupRequestModel.find({
            isAccepted: true,
            sheduledTo: { $gt: formattedCurrentDate }
        }).sort({ sheduledTo: 1 }).limit(1);
         const UpcomingDate = UpcomingData[0].sheduledTo;
        return {UpcomingDate};
    } catch (error) {
        console.error('Error fetching UpcomingDate:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function sendNotification(registrationIds, messageTitle, messageDesc, messageType) {
    const fcmApi = "AAAAM8HlO2c:APA91bENdhJlDr3mLKyOe6q7gkR3HmVQYwOzMeMxTXqDmSX8aNsKQWRwuDi9mLStcUyvWIH2VaHB6F7Se_pN-Yr52ZKlGam6mzh6Uh7XqpuVsU9t2cgGJoOrMNrKHdGgPxv2mKJUkpAY";
    const url = "https://fcm.googleapis.com/fcm/send";

    const headers = {
        "Content-Type": "application/json",
        "Authorization": 'key=' + fcmApi
    };

    const payload = {
        "registration_ids": registrationIds,
        "priority": "high",
        "notification": {
            "body": messageDesc,
            "title": messageTitle,
        },
        "data": {
            "type": messageType,
            "event_id": "mappla"
        }
    };

    try {
        const result = await axios.post(url, payload, { headers: headers });
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllCheckupRequest,
    createCheckupRequest,
    deleteCheckupRequest,
    getAcceptedCheckupRequest,
    acceptCheckupRequest,
    CheckupRequestCount,
    createCheckupResult,
    updateCheckupResult,
    getAllCheckupResult,
    getUpcomingAcceptedCheckupRequest
}