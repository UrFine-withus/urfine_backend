const mongoose = require('mongoose');
const { add, level } = require('winston');
const historyLogSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
        unique:true
    },
    sugar:{
        current:{
            type:String,
            required:true
        },
        normal:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        },
    },
    Cholesterol:{
        current:{
            type:String,
            required:true
        },
        normal:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        },
    },
    bloodpressure:{
        current:{
            type:String,
            required:true
        },
        normal:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        },
    },
    Creatine:{
        current:{
            type:String,
            required:true
        },
        normal:{
            type:String,
            required:true
        },
        level:{
            type:String,
            required:true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserData = mongoose.model('userdata', historyLogSchema);
module.exports = UserData;