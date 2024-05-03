const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
    },
    prescription_image_url:{
        type: [String],
        default: []
      },
      
    upload_month:{
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Prescription = mongoose.model('prescription', prescriptionSchema);
module.exports = Prescription;
