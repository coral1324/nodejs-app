const app = require('../app');
const request = require('supertest');
const { getPrecentageForCoinList } = require("../services/coinService");

jest.mock("../services/coinService", () => ({
  getPrecentageForCoinList: jest.fn()
}));
getPrecentageForCoinList.mockImplementation(() => {
  return { "BTC": "0%" };
});


describe("test route", () => {

  it("success test", (done) => {
    request(app)
      .get('/coin')
      .query({ "timestamp": "01/01/2020", "coinList": "BTC" })
      .set('Accept', 'application/json')
      .expect({ "BTC": "0%" })
      .expect(200, done);
  });

  it("validation error: misssing parameters", (done) => {
    request(app)
      .get('/coin')
      .set('Accept', 'application/json')
      .expect("validation error")
      .expect(400, done);
  });

  it("validation error: wrong parameter format", (done) => {
    request(app)
      .get('/coin')
      .query({ "timestamp": "01/2020", "coinList": "BTC" })
      .set('Accept', 'application/json')
      .expect("validation error")
      .expect(400, done);
  });

  test("validation error missing one parameter", (done) => {
    request(app)
      .get('/coin')
      .query({ "timestamp": "01/01/2020" })
      .set('Accept', 'application/json')
      .expect("validation error")
      .expect(400, done);
  });
});