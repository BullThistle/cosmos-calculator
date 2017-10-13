import { Calc } from './../js/calc.js';

describe('yearsToSeconds', function () {
  it('should return 851472000', function () {
    let calc = new Calc(27);
    expect(calc.yearsToSeconds()).toEqual(851472000);
  });
});
