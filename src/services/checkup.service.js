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

module.exports = {
    getAllCheckup
}