import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Galactic} from './back-end';



$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("input#userAge").val());
    let input = new Galactic(userAge);
    $(".hiddenMercury").text(input.mercuryChecker());
    $(".hiddenVenus").text(input.venusChecker());
    $(".hiddenMars").text(input.marsChecker());
    $(".hiddenJupiter").text(input.jupiterChecker());
  });
});
