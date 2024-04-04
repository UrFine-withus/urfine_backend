const {HealthLogModel} = require('../models');

const getAllHealthLogs = async () => {
    try {
        return await HealthLogModel.find();
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        throw new Error('Error fetching user');
    }
}

const createHealthLog = async (_userID, req) => {
    try {
        const isEmptyReq = Object.values(req).every(value => value === '');

        if (isEmptyReq) {
            return {
                message: "Health log details cannot be empty"
            };
        }
        
        // Get the current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        // Define the start and end of the current day
        const startOfDay = new Date(currentDate);
        const endOfDay = new Date(currentDate);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
        
        // Check if there is an existing health log for the user on the current day
        const existingHealthLog = await HealthLogModel.findOne({
            _userID,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });
        
        if (existingHealthLog) {
            return {
                message: "A health log already exists for this user on the current day"
            };
        } else {
            const newHealthLog = new HealthLogModel({ _userID, ...req });
            return await newHealthLog.save();
        }
    } catch (error) {
        console.error('Error creating health log:', error);
        throw error;
    }
};


const updateHealthLog = async (req) => {
    try {
        const data= await HealthLogModel.findByIdAndUpdate(req, req, { upsert: true, new: true });
        if(data){
            return {
                message: "Health log updated successfully"
            };
        }
    } catch (error) {
        console.error('Error updating health log:', error);
        throw error;
    }
};

const deleteHealthLog = async (req) => {
    try {
        const data= await HealthLogModel.findByIdAndDelete(req);
        if(data){
            return {
                message: "Health log deleted successfully"
            };
        }
    } catch (error) {
        console.error('Error deleting health log:', error);
        throw error;
    }
};

module.exports = {
    getAllHealthLogs,
    createHealthLog,
    updateHealthLog,
    deleteHealthLog
}