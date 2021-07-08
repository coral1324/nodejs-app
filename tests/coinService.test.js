const { getPrecentageForCoinList } = require("../services/coinService");
const { getCoinPriceForTimesatmp } = require("../clients/cryptoClient");
const { getTimestampFromDate } = require("../utils/generalUtils");

jest.mock("../clients/cryptoClient", () => ({
  getCoinPriceForTimesatmp: jest.fn()
}));
const currentTimestamp = getTimestampFromDate("01/01/2020");

describe("test service", () => {
  it('getPrecentageForCoin: calc + sort', () => {
    //mock creypto call
    const testResult = { BTC: [1, 1], DOGE: [2, 1], ETH: [1, 2] };
    getCoinPriceForTimesatmp.mockImplementation(async (coinName, fromTimesatmp) => {
      if (fromTimesatmp == currentTimestamp) {
        return testResult[coinName][1];
      }
      return testResult[coinName][0];
    });
    expect(getPrecentageForCoinList(["DOGE", "BTC", "ETH"], getTimestampFromDate("01/01/2020"))).resolves.toEqual({ "BTC": "0%", "DOGE": "100%", "ETH": "-50%" });
  });
});
