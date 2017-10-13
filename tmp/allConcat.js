import { Calc } from './../js/calc.js';
$(document).ready(function () {
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    max: 120,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false,
  });

  $('#date-submit').submit(function () {
    let today = new Date();
    today = today.toString();
    today = today.split(' ');
    let todayMonth = today[1];
    let todayDay = today[2];
    let todayYear = today[3];
    let birthday = $('#birthday').val();
    let date = birthday.split(' ');
    let day = date[0];
    let month = date[1].slice(0, -1);
    let year = date[2];

    if (month == 'January') {
      month = 1;
    } else if (month == 'Febuary') {
      month = 2;
    } else if (month == 'March') {
      month = 3;
    } else if (month == 'April') {
      month = 4;
    } else if (month == 'May') {
      month = 5;
    } else if (month == 'June') {
      month = 6;
    } else if (month == 'July') {
      month = 7;
    } else if (month == 'August') {
      month = 8;
    } else if (month == 'September') {
      month = 9;
    } else if (month == 'October') {
      month = 10;
    } else if (month == 'November') {
      month = 11;
    } else if (month == 'December') {
      month = 12;
    }

    alert(todayDay);
    alert(todayMonth);
    alert(todayYear);
  });

  // $('#birthday-out').append(day, month, year);
});
