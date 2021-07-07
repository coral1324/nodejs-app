const express = require('express');
const router = express.Router();
const {getPrecentageForCoinList} = require("../service/coinService");
const _validateParam = (params) => {
if (params.coinList == null
    || params.coinList == ""
    || params.timestamp == null
    ||params.timestamp == "") {
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
 let result = await getPrecentageForCoinList(req.query.coinList.split(','), req.query.timestamp);
 res.status(200);
 res.send(result);
});

module.exports = router;
