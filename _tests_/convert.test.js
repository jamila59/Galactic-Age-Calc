import { Galactic }  from './../src/back-end.js';
import mercuryChecker from './../src/back-end.js';
import venusChecker from './../src/back-end.js';

describe('Galactic', () => {
  let input;
  let input2;

beforeEach(function() {
    input = new Galactic(3);
    input2 = new Galactic(81);
  });

  test('should convert user Earth age to Mercury age', () => {
  expect(input.mercuryChecker()).toEqual("you are " + 12.5 + "years old on Mercury you have 67.5 years before your life expectancy");
 });

 test('should convert user Earth age to Venus age', () => {
 expect(input.venusChecker()).toEqual("you are " + 4.8 + "years old on Venus you have 75 years before your life expectancy");
})
})
