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
        const normal_value = [];
        normal_value.push(req.normal_value);
        const healthlog = new  HealthLogsModel({ normal_value,...req});
        return await healthlog.save();
    } catch (error) {
        res.status(201).json(newHealthLog);
    }
}
const updateHealthLogs = async (id, req) => {
    try {

        const existingData = await HealthLogsModel.findById(id);
        if(existingData){
            existingData.normal_value.push(req.normal_value);
        }
        const updatedData = { ...existingData, ...req};
        const data = await HealthLogsModel.findByIdAndUpdate(id, updatedData, { upsert: true, new: true });
        if (data) {
            console.log(data)
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
        const data= await HealthLogsModel.findOneAndDelete(req);
        if(data){
            console.log(data)
            return {
                message: "Healthlog deleted successfully"
            };
        }
    } catch (error) {
        console.error('Error deleting Health log:', error);
        throw error;
    }}

module.exports = {
    getAllHealthLogs,
    createHealthLogs,
    updateHealthLogs,
    deleteHealthLogs
}