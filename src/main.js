import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {  } from './back-end';


$(document).ready(function() {
  $("form#conversionForm").submit(function(event) {
    event.preventDefault();
  });
});
