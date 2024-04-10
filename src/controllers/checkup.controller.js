const {}=require('../services/checkup.service');

const getAllCheckupData = async (req, res) => {
    try {
      const checkup = await getAllCheckup();
      console.log(checkup);
      res.send(checkup);
    } catch (error) {
      console.error('Error fetching checkup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
    const createCheckupData = async (req, res) => {
        try {
        const checkup = await createCheckup();
        console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    

  module.exports = {
    getAllCheckupData,
    createCheckupData
  }