const  { getPrescription,createPrescription,deletePrescription,getUserPrescription} = require('../services/prescription.service');


const getPrescriptionData = async (req, res) => {
    try {
        const prescription = await getPrescription();
        return res.status(200).json(prescription);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const createPrescriptionData = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ error: "Body cannot be empty" });
        }
        const prescription = await createPrescription(req.body);
        return res.status(201).json(prescription);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const deletePrescriptionData = async (req, res) => {
    try {
        const prescription_id = req.query.prescription_id;
        const prescription = await deletePrescription(prescription_id);
        return res.status(201).json(prescription);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getUserPrescriptionData = async (req, res) => {
    try {
        const userId = req.params.userId;
        // console.log(userId);
        const prescription = await getUserPrescription(userId);
        return res.status(200).json(prescription);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

} 
module.exports = {
    getPrescriptionData,
    createPrescriptionData,
    deletePrescriptionData,
    getUserPrescriptionData

};