const mongoose = require('mongoose');
const { add } = require('winston');
const userDetailSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserData = mongoose.model('userdata', userDetailSchema);
module.exports = UserData;