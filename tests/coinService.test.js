const {getPrecentageForCoinList} = require("../service/coinService");
const {getCoinPriceForTimesatmp } = require("../api/creptoApi");
jest.mock("../api/creptoApi", () => ({
     getCoinPriceForTimesatmp: jest.fn()}));

  test('getPrecentageForCoin: calc + sort', () => {
    const testResult = {BTC:[1,1], DOGE:[2,1], ETH:[1,2]};
    getCoinPriceForTimesatmp.mockImplementation(async (coinName, timesatmp) => {
      if(timesatmp == new Date("01/01/2020").getTime()) {
        return testResult[coinName][1];
      }
      return testResult[coinName][0];
    });
    expect(getPrecentageForCoinList(["DOGE", "BTC", "ETH"], new Date("01/01/2020").getTime())).resolves.toEqual({"BTC": "0%",  "DOGE": "100%", "ETH": "-50%"});
  });
