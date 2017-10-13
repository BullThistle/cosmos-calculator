import { Calc } from './../js/calc.js';
$(document).ready(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    max: 119,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false,
  });
});
