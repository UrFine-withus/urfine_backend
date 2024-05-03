const {PrescriptionModel} = require('../models');

const getPrescription = async () => {
    try {
        const all_prescription = await PrescriptionModel.find();
        if (all_prescription) {
            return {all_prescription};
        }
    } catch (error) {
        console.error('Error fetching Prescription:', error);
        throw new Error('Error fetching Prescription');
    }
}

const createPrescription = async (req) => {
    try {
        
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
        const upload_month=currentMonth;

        console.log(upload_month);
        const prescription = new PrescriptionModel({upload_month,...req});
        await prescription.save();
        return prescription;
    } catch (error) {
        console.error('Error creating Prescription:', error);
        throw new Error('Error creating Prescription');
    }
}

const deletePrescription = async (prescription_id) => {
    try {
        const prescription = await PrescriptionModel.findByIdAndDelete(prescription_id);
         if(prescription){
            
            return {
                message: 'Prescription deleted successfully'
            }
         }
    } catch (error) {
        console.error('Error deleting Prescription:', error);
        throw new Error('Error deleting Prescription');
    }

}
module.exports = {
    getPrescription,
    createPrescription,
    deletePrescription
};

