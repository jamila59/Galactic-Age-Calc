export class Galactic {
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
      output.push("you have " + yearsBefore + " years before your life expectancy")
    } else  {
      output.push("you have exceeded " + yearsAfter + "of your life expectancy")
    }
    return ("you are " + mercuryAge + "years old on Mercury " + output);
  }


  venusChecker() {
  let age = this.age;
  const venus = 0.62;
  const average = this.average;
  let venusAge = (age / venus);
  let output = []
  let yearsBefore = Math.round((average - venusAge))
  let yearsAfter = Math.round((venusAge - average));

  if (average >= venusAge) {
    output.push("you have " + yearsBefore + " years before your life expectancy")
  } else  {
    output.push("you have exceeded " + yearsAfter + "years of your life expectancy")
  }
  return ("you are " + venusAge + "years old on Venus " + output);
  }
}
