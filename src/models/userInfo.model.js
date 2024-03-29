const mongoose = require('mongoose');
const { add } = require('winston');

const userInfoSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    sufferedDiseases:{
        chickenPox:{
            type: Boolean,
            required: true
        },
        measeles:{
            type: Boolean,
            required: true
        },
        hepatitis:{
            type: Boolean,
            required: true
        },
        allergies:{
            type: String,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserInfo = mongoose.model('userinfo', userInfoSchema);

module.exports = UserInfo;