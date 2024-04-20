const {HealthLogsModel} = require('../models');

const getAllHealthLogs = async (req, res) => {
    try {
        console.log('Get all healthlogs service function is working')
         const healthlogs = await HealthLogsModel.find();
        return healthlogs;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHealthLogs = async (req, res) => {
    try {
        const healthlog = new  HealthLogsModel({ ...req});
        return await healthlog.save();
    } catch (error) {
        res.status(201).json(newHealthLog);
    }
}
const updateHealthLogs = async (id, req) => {
    try {
        const data= await HealthLogsModel.findByIdAndUpdate(id, req, { upsert: true, new: true });
        if(data){
            return {
                message: "Healthlog updated successfully"
            };
        }
    } catch (error) {
        console.error('Error updating Health log:', error);
        throw error;
    }


}

const deleteHealthLogs = async (req) => {
    try {
        const data= await HealthLogsModel.findByIdAndDelete(req);
        if(data){
            return {
                message: "History log deleted successfully"
            };
        }
    } catch (error) {
        console.error('Error deleting History log:', error);
        throw error;
    }}

module.exports = {
    getAllHealthLogs,
    createHealthLogs,
    updateHealthLogs,
    deleteHealthLogs
}