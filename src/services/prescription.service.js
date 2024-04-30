import { PrescriptionModel} from '../models/index';

const getPrescription = async () => {
    try {
        const prescription = await PrescriptionModel.find();
        if (prescription) {
            return prescription;
        }
    } catch (error) {
        console.error('Error fetching Prescription:', error);
        throw new Error('Error fetching Prescription');
    }
}

module.exports = {
    getPrescription
};