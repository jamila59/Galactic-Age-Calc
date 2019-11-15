import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Galactic, mercuryAge} from './back-end';



$(document).ready(function() {
  $("form#conversionForm").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("input#userAge").val());
    let input = new Galactic(userAge);
    input.mercuryChecker();
    input.venusChecker();
    input.marsChecker();
    input.jupiterChecker();
    (".hiddenMercury").text(mercuryAge);
    // (".hiddenVenus").text
    // (".hiddenMars").text
    // (".hiddenJupiter").text
  });
});
