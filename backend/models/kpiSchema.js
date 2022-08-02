const mongoose      = require('mongoose');
const connection    = require('../config/dbconn')
 
const KpiSchema = new mongoose.Schema({
    name:String,
    value:Number,
    userKpis:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserKpi",
        default:null,
        required: false
    }]
});


const Kpi = connection.model('Kpi', KpiSchema);
 
module.exports = Kpi