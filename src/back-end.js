export class Galaxy {
  constructor(age){
    this.age = age;
    this.average = 80;
  }

  mercuryChecker() {
    let age = this.age;
    const mercury = 0.24;
    const average = this.average;
    let mercuryAge = (age / mercury);
    let output = []
    let yearsBefore = (average - mercuryAge);
    let yearsAfter = (mercuryAge - average);

    if (age <= mercuryAge) {
      output.push("you have " + yearsBefore + "before life expectancy")
    } else  {
      output.push("you have exceeded " + yearsAfter + "of life expectancy")
    }
    return ("you are " + answer + " years old in mercury " + output);
  }
};
