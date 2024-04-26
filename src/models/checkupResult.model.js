const mongoose = require('mongoose');
const { add } = require('winston');

const checkupResultSchema = new mongoose.Schema({
    _userID:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    doctor_incharge:{
        type: String,
        required: true,
    },
    assistance:{
        type: Array,  
    },
    equipment:[
        
        {
            _id:false,
            name: {
                type: String,
            },
            quantity: {
                type: Number,
            }
        }
    ],
    medicine:[
        {
            _id:false,
            name: {
                type: String,
            },
            quantity: {
                type: Number,
            }
        }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CheckupResult = mongoose.model('checkupresult',checkupResultSchema);

module.exports = CheckupResult;