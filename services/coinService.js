const { getCoinPriceForTimesatmp } = require("../clients/cryptoClient");
const { calcPercentage, sortObject, getTimestampFromDate } = require("../utils/generalUtils");
//calculate precentage 
const _getPrecentageForCoin = async (coinName, fromTimestamp, toTimestamp) => {
    let toPrice = await getCoinPriceForTimesatmp(coinName, toTimestamp);
    let fromPrice = await getCoinPriceForTimesatmp(coinName, fromTimestamp);
    let percentage = calcPercentage(fromPrice, toPrice);
    return percentage;
}

const getPrecentageForCoinList = async (coinList, timestamp) => {
    let currentTimestamp = getTimestampFromDate("");
    let result = await Promise.all(
        coinList.map(async (coin) => ({ name: [coin], prec: await _getPrecentageForCoin(coin, timestamp, currentTimestamp) }))
    );
    return sortObject(result.reduce((obj, item) => {
        obj[item.name] = `${item.prec}%`;
        return obj
    }, {}));
}

module.exports = { getPrecentageForCoinList }