const {HealthLogModel} = require('../models');

const getAllHealthLogs = async () => {
    try {
        return await HealthLogModel.find();
    } catch (error) {
        console.error('Error fetching healthlogs:', error);
        throw new Error('Error fetching user');
    }
}

const createHealthLog = async (req) =>  {
    try {
        const isEmptyReq = Object.values(req).every(value => value === '');

        if (isEmptyReq) {
            return {
                message: "Health log details cannot be empty"
            };
        }
        const existingHealthLog = await HealthLogModel.findOne({...req});
        
        if (existingHealthLog) {
            return {
                message:"Health log already exists in the database"
            };
        } else {
            const newHealthLog = new HealthLogModel({...req});
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