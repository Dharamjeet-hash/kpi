const mongoose      = require('mongoose');
const connection    = require('../config/dbconn')
 
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    userKpis:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserKpi",
        default:null,
        required: false
    }]
});


const User = connection.model('User', UserSchema);
 
module.exports = User