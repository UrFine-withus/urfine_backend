const mongoose = require('mongoose');
const healthLogSchema = new mongoose.Schema({
   label:{
    type:String,
    required:true
   },
   normal_value:{
    type:String,
    required:true
   }
});

const HealthLog = mongoose.model('healthlog', healthLogSchema);
module.exports = HealthLog;