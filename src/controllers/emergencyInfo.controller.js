
const { getAllEmergency, createEmergency,updateEmergency,deleteEmergency,getEmergencyProfile} = require("../services/emergencyInfo.service");

// Define your controller methods

const getAllEmergencyData = async (req, res) => {
  try {
    const emergency = await getAllEmergency();
    // console.log(emergency);
    res.send(emergency);
  } catch (error) {
    console.error('Error fetching emergency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getEmergencyProfileData = async (req, res) => {
  try {
    // console.log(req.query.profile);
    const emergency = await getEmergencyProfile(req.query.profile);
    // console.log(emergency);
    res.send(emergency);
  } catch (error) {
    console.error('Error fetching emergency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
const createEmergencyData = async (req, res) => {
  try {
    // console.log(req.body);
    const emergency = await createEmergency(req.body);
    // console.log(emergency);
    res.send(emergency);
  } catch (error) {
    console.error('Error fetching emergency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

const updateEmergencyData = async (req, res) => {
  try {
    const emergency = await updateEmergency(req.body);
    // console.log(emergency);
    res.send(
      emergency);
  } catch (error) {
    console.error('Error fetching emergency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

const deleteEmergencyData = async (req, res) => {
  try {
    // console.log(req.query._id);
    const emergency = await deleteEmergency(req.query._id);
    // console.log(emergency);
    res.send(emergency);
  } catch (error) {
    console.error('Error fetching emergency:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }


}

module.exports = {
  getAllEmergencyData,
  createEmergencyData,
  updateEmergencyData,
  deleteEmergencyData,
  getEmergencyProfileData
  };
