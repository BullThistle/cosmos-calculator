import { Calc } from './../js/calc.js';

$(document).ready(function () {
  $('.modal').modal();
  $('.parallax').parallax();
  $('ul.tabs').tabs();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    max: 120,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false,
  });

  $('#date-submit').submit(function (e) {
    e.preventDefault();
    $('#seconds').empty();
    $('#mercury').empty();
    $('#venus').empty();
    $('#mars').empty();
    $('#jupiter').empty();
    $('#expec').empty();
    $('#mercuryLeft').empty();
    $('#venusLeft').empty();
    $('#marsLeft').empty();
    $('#jupiterLeft').empty();
    let thisYear = 0;
    let birthday = $('#birthday').val();
    let region = $("input[name='region']:checked").val();
    let today = new Date();
    today = today.toString();
    today = today.split(' ');
    let todayMonth = today[1];
    let todayDay = today[2];
    let todayYear = today[3];
    let date = birthday.split(' ');
    let day = date[0];
    let month = date[1].slice(0, -1);
    let year = date[2];

    if (month == 'January') {
      month = 1;
    } else if (month == 'February') {
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

    if (todayMonth == 'Jan') {
      todayMonth = 1;
    } else if (todayMonth == 'Feb') {
      todayMonth = 2;
    } else if (todayMonth == 'Mar') {
      todayMonth = 3;
    } else if (todayMonth == 'Apr') {
      todayMonth = 4;
    } else if (todayMonth == 'May') {
      todayMonth = 5;
    } else if (todayMonth == 'Jun') {
      todayMonth = 6;
    } else if (todayMonth == 'Jul') {
      todayMonth = 7;
    } else if (todayMonth == 'Aug') {
      todayMonth = 8;
    } else if (todayMonth == 'Sep') {
      todayMonth = 9;
    } else if (todayMonth == 'Oct') {
      todayMonth = 10;
    } else if (todayMonth == 'Nov') {
      todayMonth = 11;
    } else if (todayMonth == 'Dec') {
      todayMonth = 12;
    }

    let age = 0;
    if (month > todayMonth) {
      age = ((todayYear - year) - 1);
    } else {
      age = (todayYear - year);
    }

    let calc = new Calc(age);
    let calc2 = new Calc(calc.lifeExpectency(region));

    let seconds = calc.yearsToSeconds();
    $('#seconds').html(calc.yearsToSeconds());
    $('#mercury').html(calc.earthToMercury());
    $('#venus').html(calc.earthToVenus());
    $('#mars').html(calc.earthToMars());
    $('#jupiter').html(calc.earthToJupiter());
    $('#mercuryLeft').html(calc2.earthToMercury());
    $('#venusLeft').html(calc2.earthToVenus());
    $('#marsLeft').html(calc2.earthToMars());
    $('#jupiterLeft').html(calc2.earthToJupiter());
    $('#expec').html(calc.lifeExpectency(region));
    $('#modal1').modal('open');
  });

});
