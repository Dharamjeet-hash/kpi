const express 	        = require('express');
const router            = express.Router();
const backend           = require('../controller/backend')
const authMiddleware    = require('../middleware/auth')


router.get('/get-kpis',authMiddleware,backend.getkpis)
router.post('/create-kpi',authMiddleware,backend.createKpi)



module.exports = router