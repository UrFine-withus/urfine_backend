const mongoose = require('mongoose');
const { add } = require('winston');

const checkupRequestSchema = new mongoose.Schema({
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
    spO2_level:{
        type: Number,
    },
    blood_pressure:{
    type: Number,
    },
    isAccepted:{          
        type: Boolean,
        default: false,
        required: true
    },
    sheduledTo:{
        type: String,
        default: null
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

const CheckupRequest = mongoose.model('checkup',checkupRequestSchema);

module.exports = CheckupRequest;