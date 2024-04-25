
const {getAllCheckupRequest,createCheckupRequest,deleteCheckupRequest,getAcceptedCheckupRequest,acceptCheckupRequest,CheckupRequestCount,createCheckupResult,updateCheckupResult}=require('../services/checkup.service');

const getAllCheckupRequestData = async (req, res) => {
    try {
      const checkup = await getAllCheckupRequest();
      // console.log(checkup);
      res.send(checkup);
    } catch (error) {
      console.error('Error fetching checkup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  const CheckupRequestCountData = async (req, res) => {
    try {
      const checkup = await CheckupRequestCount();
      // console.log(checkup);
      res.send(checkup);
    } catch (error) {
      console.error('Error fetching checkup:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

    const createCheckupRequestData = async (req, res) => {
        try {
          // console.log(req.body);
          const _userID = req.query.userId;
        const checkup = await createCheckupRequest(_userID,req.body);
         console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    const deleteCheckupRequestData = async (req, res) => {
        try {
          const req_id = req.query.req_id;
          // console.log(req_id);
          const req_deletedBy = req.query.deletedBy;
          // console.log(req_deletedBy);
        const checkup = await deleteCheckupRequest(req_id,req_deletedBy);
        // console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }    
    const getAcceptedCheckupRequestData = async (req, res) => {
        try {
        const checkup = await getAcceptedCheckupRequest();
        // console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    
    }
    const acceptCheckupRequestData = async (req, res) => {
        try {
 
        //  console.log(req);
        const checkup = await acceptCheckupRequest(req.query);
        // console.log(checkup);
        res.send(checkup);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    const createCheckupResultData = async (req, res) => {
        try {
        const _userID=req.query.userId;
        const checkuResult = await createCheckupResult(_userID,req.body);
        // console.log(checkup);
        res.send(checkupResult);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    const updateCheckupResultData = async (req, res) => {
        try {
        const _id=req.query.id;
        const checkupResult = await updateCheckupResult(_id,req.body);
        // console.log(checkup);
        res.send(checkupResult);
        } catch (error) {
        console.error('Error fetching checkup:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }




  module.exports = {
    getAllCheckupRequestData,
    createCheckupRequestData,
    deleteCheckupRequestData,
    getAcceptedCheckupRequestData,
    acceptCheckupRequestData,
    CheckupRequestCountData,
    createCheckupResultData,
    updateCheckupResultData
  }
  