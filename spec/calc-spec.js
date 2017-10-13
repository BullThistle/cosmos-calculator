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

describe('earthToVenus', function () {
  it('should return 16.74', function () {
    let calc = new Calc(27);
    expect(calc.earthToVenus()).toEqual(16.74);
  });
});

describe('earthToMars', function () {
  it('should return 50.76', function () {
    let calc = new Calc(27);
    expect(calc.earthToMars()).toEqual(50.76);
  });
});

describe('earthToJupiter', function () {
  it('should return 320.22', function () {
    let calc = new Calc(27);
    expect(calc.earthToJupiter()).toEqual(320.22);
  });
});

describe('lifeExpectency', function () {
  it('should return life expectancy based on region', function () {
    let calc = new Calc(27);
    let calc2 = new Calc(85);
    expect(calc.lifeExpectency('United States')).toEqual(52);
    expect(calc.lifeExpectency('Mexico')).toEqual(49);
    expect(calc2.lifeExpectency('United States')).toEqual(-6);
  });
});
