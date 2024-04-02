const mongoose = require('mongoose');
const { add } = require('winston');

const EmergencyInfoSchema = new mongoose.Schema({
    profile:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
    },
    location:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const EmergencyInfo = mongoose.model('emergencyinfo',EmergencyInfoSchema);

module.exports = EmergencyInfo;