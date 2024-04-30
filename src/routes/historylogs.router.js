const express = require('express');
const router = express.Router();
const{getAllHistoryLogsData,createHistoryLogData,updateHistoryLogData,deleteHistoryLogData,getUserHistoryLogsData, getHistoryLogdateData} = require('../controllers/historylogs.controller');


router.route('/user').get(getUserHistoryLogsData);
router.route('/dates').get(getHistoryLogdateData);
router.route('/')
.get(getAllHistoryLogsData)
.post(createHistoryLogData)
.put(updateHistoryLogData)
.delete(deleteHistoryLogData)

module.exports = router;