const { compile } = require('morgan');
const {getAllCheckup,createCheckup,deleteCheckup,getAcceptedCheckup}=require('../services/checkup.service');

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
        const checkup = await createCheckup(req.body);
        console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    const deleteCheckupData = async (req, res) => {
        try {
          const req_id = req.query.id;
          console.log(req_id);
          const req_deletedBy = req.query.deletedBy;
          console.log(req_deletedBy);
        const checkup = await deleteCheckup(req_id,req_deletedBy);
        console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }    
    const getAcceptedCheckupData = async (req, res) => {
        try {
        const checkup = await getAcceptedCheckup();
        console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    
    }
  module.exports = {
    getAllCheckupData,
    createCheckupData,
    deleteCheckupData,
    getAcceptedCheckupData
  }
  