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
    equipment:{
        type:[
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
     default: []
    },
    medicine:{
        type:[
        {
            _id:false,
            name: {
                type: String,
            },
            quantity: {
                type: Number,
            }
        }],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CheckupResult = mongoose.model('checkupresult',checkupResultSchema);

module.exports = CheckupResult;