const mongoose = require('mongoose');
const { add } = require('winston');

const checkupSchema = new mongoose.Schema({
    _userID:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    requireNeeds:{
        docter_needed:{
            type: Boolean,
            required: true
        },
        nurse_assistance:{
            type: Boolean,
            required: true
        },
        equipments_needed:{
            type: Array,
            required: true
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
    deleted:{
        deletedBy:{
            type: String,
            default: null
        },
        deletedAt:{
            type: Date,
            default: null
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Checkup = mongoose.model('checkup',checkupSchema);

module.exports = Checkup;