export class Calc {

  constructor(age) {
    this.age = age;
  }

  yearsToSeconds() {
    return (this.age * 31536000);
  }

  daysToSeconds(days) {
    let result = (days * 86400).toString();
    if (result.charAt(0) == '0') {
      result = result.slice(0, -1);
    }

    result = parseInt(result);
    return result;
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
    } else if (region == 'Mexico') {
      expectancy = 76;
    } else if (region == 'Africa') {
      expectancy = 71;
    } else if (region == 'Antarctica') {
      expectancy = 0;
    } else if (region == 'Asia') {
      expectancy = 76;
    } else if (region == 'Australia') {
      expectancy = 82;
    } else if (region == 'Europe') {
      expectancy = 76;
    } else if (region == 'S.A.') {
      expectancy = 74;
    }

    return (expectancy - this.age);
  }

}
