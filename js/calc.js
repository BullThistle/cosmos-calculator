export class Calc {
  constructor(age) {
    this.age = age;
  }

  yearsToSeconds() {
    return (this.age * 31536000);
  }
}
