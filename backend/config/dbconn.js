const mongoose      = require('mongoose');
const connection    = mongoose.createConnection('mongodb://localhost:27017/kpi');

module.exports      = connection