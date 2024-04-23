const mongoose = require('mongoose');
const historyLogSchema = new mongoose.Schema({
    _userID:{
        type:String,
        required:true,
    },
    healthlog:{
        type:Array,
        requires:true,
        default: []
    },
    level:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const HistoryLog = mongoose.model('historylog', historyLogSchema);
module.exports = HistoryLog;