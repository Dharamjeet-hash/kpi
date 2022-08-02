const mongoose      = require('mongoose');
const connection    = require('../config/dbconn')
 
const UserKpiSchema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    kpi :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Kpi'
    },
});


const UserKpi = connection.model('UserKpi', UserKpiSchema);
 
module.exports = UserKpi