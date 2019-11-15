import { Galactic } from './../src/back-end.js';
import mercuryChecker from './../src/back-end.js';

describe('Galactic', () => {
  let input;
  let input2;

beforeEach(function() {
    input = new Galactic(3);
    input2 = new Galactic(81);
  });

  test('should convert user Earth age to Mercury age', () => {
  expect(input2.mercuryChecker()).toEqual(" you are " + 12.5 + " years old in mercury ");
 });
})
