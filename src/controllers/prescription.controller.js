const  { getPrescription,createPrescription} = require('../services/prescription.service');


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
        const prescription = await createPrescription(req.body);
        return res.status(201).json(prescription);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}
module.exports = {
    getPrescriptionData,
    createPrescriptionData

};