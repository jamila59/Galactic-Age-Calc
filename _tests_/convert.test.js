import { Galactic }  from './../src/back-end.js';
import mercuryChecker from './../src/back-end.js';
import venusChecker from './../src/back-end.js';

describe('Galactic', () => {
  let input;
  let input2;

beforeEach(function() {
    input = new Galactic(6);
    input2 = new Galactic(81);
  });

  test('should convert user Earth age to Mercury age and test how much the user has of life expectancy', () => {
  expect(input.mercuryChecker()).toEqual("you are " + 25 + "years old on Mercury you have 55 years before your life expectancy");
  });

 test('should convert user Earth age to Venus age and test how many years the user exceeds by', () => {
 expect(input2.venusChecker()).toEqual("you are " + 131 + "years old on Venus you have exceeded 51years of your life expectancy");
  });

  test('should convert user Earth age to Mars age and test how much the user has of life expectance', () => {
  expect(input.marsChecker()).toEqual("you are " + 4 + "years old on Mars you have 76 years before your life expectancy");

})
});
