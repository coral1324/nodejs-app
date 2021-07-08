const app = require('../app');
const request = require('supertest');
const { getTimestampFromDate } = require("../utils/generalUtils");
const { getCoinPriceForTimesatmp } = require("../clients/cryptoClient");
const testResult = { BTC: [1, 1] };
const currentTimestamp = getTimestampFromDate("01/01/2020");

jest.mock("../clients/cryptoClient", () => ({
    getCoinPriceForTimesatmp: jest.fn()
}));

getCoinPriceForTimesatmp.mockImplementation(async (coinName, fromTimesatmp) => {
    if (fromTimesatmp == currentTimestamp) {
        return testResult[coinName][1];
    }
    return testResult[coinName][0];
});

describe("integreation test", () => {
    it("test", (done) => {
        request(app)
            .get('/coin')
            .query({ "timestamp": "01/01/2020", "coinList": "BTC" })
            .set('Accept', 'application/json')
            .expect({ "BTC": "0%" })
            .expect(200, done);
    });
}); 