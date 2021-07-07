const express = require('express');
const router = express.Router();
const {getPrecentageForCoinList} = require("../services/coinService");
const moment = require("moment");

const _validateParam = (params) => {
if (params.coinList == null
    || params.coinList == ""
    || params.timestamp == null
    || params.timestamp == "" 
    || !moment(params.timestamp, "DD/MM/YYYY").isValid()) {
      return false
    }
return true;
};
router.get('/', async function(req, res, next) {
 if (!_validateParam(req.query)) {
   res.status(400);
   res.send("validation error");
   return;
 }
 let result = await getPrecentageForCoinList(req.query.coinList.split(','), new Date(req.query.timestamp).getTime());
 res.status(200);
 res.send(result);
});

module.exports = router;
