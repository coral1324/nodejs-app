const {calcPercentage, sortObject, getTimestampFromDate} = require("../utils/generalUtils");
test('start was 1 now 2 100%', () => {
    expect(calcPercentage(1, 2)).toEqual(100);
  });
test('start was 4 now 2 -50%', () => {
    expect(calcPercentage(4, 2)).toEqual(-50);
});

test('start was 1 now 4 300', () => {
  expect(calcPercentage(1, 4)).toEqual(300);
});

test('start was 4 now 1 -75', () => {
  expect(calcPercentage(4, 1)).toBe(-75);
});

test('start was 1 now 1 0', () => {
  expect(calcPercentage(1, 1)).toBe(0);
});

test('sort', () => {
  expect(sortObject({a:1,c:3,b:2})).toEqual({a:1, b:2, c:3});
})

test('getTimestampFromDate', ()=> {
  expect(getTimestampFromDate("01/01/2020")).toBe(1577829600);
})