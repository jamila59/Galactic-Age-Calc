import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Galactic } from './back-end';


$(document).ready(function() {
  $("form#conversionForm").submit(function(event) {
    event.preventDefault();
    let userAge = parseInt($("input#userAge").val());
    input = new Galactic(userAge);
    input.mercuryChecker();
    input.venusChecker();
    input.marsChecker();
    input.jupiterChecker();
  });
});
