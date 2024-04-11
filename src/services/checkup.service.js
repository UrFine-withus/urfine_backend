const {CheckupModel} = require('../models');

const getAllCheckup = async (req, res) => {
    try {
        const checkup = await CheckupModel.find({deleted: null});
        console.log(checkup);
        res.send(checkup);
    } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createCheckup = async (req, res) => {
    try {
        const checkup = new CheckupModel({...req});
        return await checkup.save();
    } catch (error) {
        console.error('Error creating checkup:', error);
        throw error;
    }

}

const deleteCheckup = async (req, res) => {
    try {
        const checkup = await CheckupModel.findByIdAndUpdate(req, 
            {deleted:{
                deletedBy: req.query.deletedBy,
                deletedAt: Date.now()
            }}, { upsert: true, new: true });
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

module.exports = {
    getAllCheckup,
    createCheckup,
    deleteCheckup
}