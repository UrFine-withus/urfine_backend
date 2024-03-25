const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
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

const UserDetails = mongoose.model('userdata', userDetailsSchema);

module.exports = UserDetails;