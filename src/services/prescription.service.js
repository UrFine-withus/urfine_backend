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

const uploadPrescription = async (req) => {
    try {
        
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
        const upload_month=currentMonth;
      
        // console.log(upload_month);
        const userdata=await PrescriptionModel.findOne({_userID:req._userID,upload_month:currentMonth});
        if(userdata)
            {
                for (let url of req.prescription_image_url) {
                    userdata.prescription_image_url.push(url);
                  }
                 await userdata.save();
                 return {
                    message: 'Prescription created successfully'
                }
            }
          else{
             const prescription = new PrescriptionModel({upload_month,...req});
            await prescription.save();
            if(prescription){
            return {
                message: 'Prescription created successfully'
            }
         }
          }  
       
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

const getUserPrescription = async (_userID) => {
    try {
        const prescription = await PrescriptionModel.find({_userID}).sort({createdAt: -1});
        if (prescription) {
            return {prescription};
        }
    } catch (error) {
        console.error('Error fetching Prescription:', error);
        throw new Error('Error fetching Prescription');
    }
}
module.exports = {
    getPrescription,
    uploadPrescription,
    deletePrescription,
    getUserPrescription
};

