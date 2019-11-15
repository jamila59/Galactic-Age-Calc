export class Galactic {
  constructor(age){
    this.age = age;
    this.average = 80;
  }

    mercuryChecker() {
    let age = this.age;
    const mercury = 0.24;
    const average = this.average;
    let mercuryAge = Math.round(age / mercury);
    let output = []
    let yearsBefore = Math.round(average - mercuryAge);
    let yearsAfter = Math.round(mercuryAge - average);

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
    let venusAge = Math.round(age / venus);
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

  marsChecker() {
    let age = this.age;
    const mars = 1.88;
    const average = this.average;
    let marsAge = Math.round(age / mars);
    let output = []
    let yearsBefore = Math.round((average - marsAge))
    let yearsAfter = Math.round((marsAge - average));

    if (average >= marsAge) {
      output.push("you have " + yearsBefore + " years before your life expectancy")
    } else  {
      output.push("you have exceeded " + yearsAfter + "years of your life expectancy")
    }
    return ("you are " + marsAge + "years old on Mars " + output);
  }

  jupiterChecker() {
    let age = this.age;
    const jupiter = 11.86;
    const average = this.average;
    let jupiterAge = Math.round(age / jupiter);
    let output = []
    let yearsBefore = Math.round((average - jupiterAge))
    let yearsAfter = Math.round((jupiterAge - average));

    if (average >= jupiterAge) {
      output.push("you have " + yearsBefore + " years before your life expectancy")
    } else  {
      output.push("you have exceeded " + yearsAfter + "years of your life expectancy")
    }
    return ("you are " + jupiterAge + "years old on Jupiter " + output);
    }
  }
