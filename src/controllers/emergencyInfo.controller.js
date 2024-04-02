
const { getEmergency } = require("../services/emergencyInfo.service");

// Define your controller methods

const getAllEmergencyData = async (req, res) => {
  try {
    const user = await getEmergency();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const createEmergencyData = async (req, res) => {
  try {
    const user = await createEmergency(req.body);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}

module.exports = {
  getAllEmergencyData,
  createEmergencyData
  };
