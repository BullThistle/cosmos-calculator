export class Calc {
  constructor(age) {
    this.age = age;
  }

  yearsToSeconds() {
    return (this.age * 31536000);
  }

  daysToSeconds(days) {
    return (days * 86400);
  }

  monthsToSeconds(months) {
    let daysInMonths = [31, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31];
    let result = 0;
    for (let i = 0; i < months; i++) {
      result += this.daysToSeconds(daysInMonths[i]);
    }

    return result;
  }

  earthToMercury() {
    return parseFloat((this.age * .24).toFixed(2));
  }

  earthToVenus() {
    return parseFloat((this.age * .62).toFixed(2));
  }

  earthToMars() {
    return parseFloat((this.age * 1.88).toFixed(2));
  }

  earthToJupiter() {
    return parseFloat((this.age * 11.86).toFixed(2));
  }

  lifeExpectency(region) {
    let expectancy = 0;
    if (region == 'Canada') {
      expectancy = 82;
    } else if (region == 'United States') {
      expectancy = 79;
    } else if (region == 'Cuba') {
      expectancy = 79;
    } else if (region == 'Mexico') {
      expectancy = 76;
    } else if (region == 'Antigua') {
      expectancy = 76;
    } else if (region == 'Jamaica') {
      expectancy = 75;
    } else if (region == 'Bahamas') {
      expectancy = 75;
    }

    return (expectancy - this.age);
  }
}
