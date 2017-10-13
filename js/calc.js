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
}
