const mongoose = require('mongoose');
const healthLogSchema = new mongoose.Schema({
   label:{
    type:String,
    required:true
   },
   normal_value:{
    type:Array,
    required:true
   }
});

const HealthLog = mongoose.model('healthlog', healthLogSchema);
module.exports = HealthLog;