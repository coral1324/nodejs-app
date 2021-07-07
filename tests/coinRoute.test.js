const app = require('../app');
const request = require('supertest');


const { getPrecentageForCoinList } = require("../service/coinService");
jest.mock("../service/coinService", () => ({
  getPrecentageForCoinList: jest.fn()}));
  getPrecentageForCoinList.mockImplementation(() => {
    return {"BTC": "0%"};
 });


test("test",  (done) => {
  request(app)
  .get('/coin')
  .query({"timestamp":"01/01/2020","coinList":"BTC"})
  .set('Accept', 'application/json')
  .expect({"BTC": "0%"})
  .expect(200, done);
}); 

test("test",  (done) => {
  request(app)
  .get('/coin')
  .set('Accept', 'application/json')
  .expect("validation error")
  .expect(400, done);
}); 
