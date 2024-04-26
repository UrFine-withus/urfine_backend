const mongoose = require('mongoose');
const historyLogSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
    },
    healthlog:[
        {
            _id:false,
            label:{
                type:String,
                required:true
            },
            normal_value:{
                type:String,
                required:true
            },
            current_value:{
                type:String,
                required:true
            },
            level:{
                type:Number,
                required:true
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const HistoryLog = mongoose.model('historylog', historyLogSchema);
module.exports = HistoryLog;