const express = require('express');
const router = express.Router();
const {getPrecentageForCoinList} = require("../services/coinService");
const moment = require("moment");
const {getTimestampFromDate} = require("../utils/generalUtils");

const _validateParams = (params) => {
if (params.coinList == null
    || params.coinList == ""
    || params.timestamp == null
    || params.timestamp == "" 
    || !moment(params.timestamp, "DD/MM/YYYY").isValid()) {
      let err = new Error("validation error");
      err.status = 400;
      throw err;
    }
};
router.get('/', async function(req, res, next) {
 try {
  _validateParams(req.query)
 let result = await getPrecentageForCoinList(req.query.coinList.split(','), getTimestampFromDate(req.query.timestamp));
 res.status(200);
 res.send(result);
 } catch (err) {
   next(err);
 }
});

module.exports = router;
