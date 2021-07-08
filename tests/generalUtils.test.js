const { calcPercentage, sortObject, getTimestampFromDate } = require("../utils/generalUtils");
describe("general utils test", () => {
  describe("test calcPercentage", () => {
    it('start was 1 now 2 100%', () => {
      expect(calcPercentage(1, 2)).toEqual(100);
    });
    it('start was 4 now 2 -50%', () => {
      expect(calcPercentage(4, 2)).toEqual(-50);
    });

    it('start was 1 now 4 300', () => {
      expect(calcPercentage(1, 4)).toEqual(300);
    });

    it('start was 4 now 1 -75', () => {
      expect(calcPercentage(4, 1)).toBe(-75);
    });

    it('start was 1 now 1 0', () => {
      expect(calcPercentage(1, 1)).toBe(0);
    });
  });

  describe("test sort", () => {
    it('sort', () => {
      expect(sortObject({ a: 1, c: 3, b: 2 })).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
  describe("test getTimestampFromDate", () => {
    it('getTimestampFromDate with string value', () => {
      expect(getTimestampFromDate("01/01/2020")).toBe(1577829600);
    });

    it('getTimestampFromDate empty', () => {
      expect(getTimestampFromDate()).not.toBe(NaN);
    });
  });
});