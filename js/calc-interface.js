import { Calc } from './../js/calc.js';
$(document).ready(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false,
  });
});
