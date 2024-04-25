const mongoose = require('mongoose');
const { add } = require('winston');

const checkupResultSchema = new mongoose.Schema({
    _userID:{
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
    requireNeeds:{
        doctor_needed:{
            type: Boolean,
            required: true
        },
        nurse_assistance:{
            type: Boolean,
            required: true
        },
        equipments_needed:{
            type: String,
            
        },
     },
    deleted:{
        deletedBy:{
            type: String,
        },
        deletedAt:{
            type: Date,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CheckupResult = mongoose.model('checkup',checkupResultSchema);

module.exports = CheckupResult;