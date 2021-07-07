const {getCoinPriceForTimesatmp} = require("../api/creptoApi");
const {calcPercentage, sortObject} = require("../utils/generalUtils");

const _getPrecentageForCoin = async(coinName, timestamp) => {
    let currentTimestampPrice = await getCoinPriceForTimesatmp(coinName, new Date().getTime());
    let givenTimestampPrice = await getCoinPriceForTimesatmp(coinName, timestamp);
    let percentage = calcPercentage(givenTimestampPrice, currentTimestampPrice);
    return percentage;
}

const getPrecentageForCoinList = async(coinList, timestamp) => {
    let result = await Promise.all(
        coinList.map(async(coin) => ({name: [coin], prec: await _getPrecentageForCoin(coin, timestamp)}))
        );
    result = result.reduce((obj, item)=> {
        obj[item.name] = `${item.prec}%`;
        return obj
    }, {});
    return sortObject(result);

}

module.exports = {getPrecentageForCoinList}