import { Calc } from './../js/calc.js';

describe('yearsToSeconds', function () {
  it('should return 851472000', function () {
    let calc = new Calc(27);
    expect(calc.yearsToSeconds()).toEqual(851472000);
  });
});

describe('yearsToSeconds', function () {
  it('should return 432000', function () {
    let calc = new Calc(27);
    expect(calc.daysToSeconds(5)).toEqual(432000);
  });
});

describe('monthsToSeconds', function () {
  it('should return 432000', function () {
    let calc = new Calc(27);
    expect(calc.monthsToSeconds(5)).toEqual(13046400);
  });
});

describe('earthToMercury', function () {
  it('should return 6.48', function () {
    let calc = new Calc(27);
    expect(calc.earthToMercury()).toEqual(6.48);
  });
});
