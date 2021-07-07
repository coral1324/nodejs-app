const {calcPercentage} = require("../utils/generalUtils");
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