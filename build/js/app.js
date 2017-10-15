(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = exports.Calc = function () {
  function Calc(age) {
    _classCallCheck(this, Calc);

    this.age = age;
  }

  _createClass(Calc, [{
    key: 'yearsToSeconds',
    value: function yearsToSeconds() {
      return this.age * 31536000;
    }
  }, {
    key: 'daysToSeconds',
    value: function daysToSeconds(days) {
      var result = (days * 86400).toString();
      if (result.charAt(0) == '0') {
        result = result.slice(0, -1);
      }

      result = parseInt(result);
      return result;
    }
  }, {
    key: 'monthsToSeconds',
    value: function monthsToSeconds(months) {
      var daysInMonths = [31, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31];
      var result = 0;
      for (var i = 0; i < months; i++) {
        result += this.daysToSeconds(daysInMonths[i]);
      }

      return result;
    }
  }, {
    key: 'earthToMercury',
    value: function earthToMercury() {
      return parseFloat((this.age * .24).toFixed(2));
    }
  }, {
    key: 'earthToVenus',
    value: function earthToVenus() {
      return parseFloat((this.age * .62).toFixed(2));
    }
  }, {
    key: 'earthToMars',
    value: function earthToMars() {
      return parseFloat((this.age * 1.88).toFixed(2));
    }
  }, {
    key: 'earthToJupiter',
    value: function earthToJupiter() {
      return parseFloat((this.age * 11.86).toFixed(2));
    }
  }, {
    key: 'lifeExpectency',
    value: function lifeExpectency(region) {
      var expectancy = 0;
      if (region == 'Canada') {
        expectancy = 82;
      } else if (region == 'United States') {
        expectancy = 79;
      } else if (region == 'Cuba') {
        expectancy = 79;
      } else if (region == 'Mexico') {
        expectancy = 76;
      } else if (region == 'Antigua') {
        expectancy = 76;
      } else if (region == 'Jamaica') {
        expectancy = 75;
      } else if (region == 'Bahamas') {
        expectancy = 75;
      }

      return expectancy - this.age;
    }
  }]);

  return Calc;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _calc = require('./../js/calc.js');

$(document).ready(function () {
  $('.modal').modal({});
  $('.parallax').parallax();
  $('ul.tabs').tabs();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 120,
    max: 120,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false
  });

  $('#date-submit').submit(function (e) {
    e.preventDefault();
    $('#seconds').empty();
    $('#mercury').empty();
    $('#venus').empty();
    $('#mars').empty();
    $('#jupiter').empty();
    $('#expec').empty();
    var thisYear = 0;
    var birthday = $('#birthday').val();
    var region = $("input[name='region']:checked").val();
    var today = new Date();
    today = today.toString();
    today = today.split(' ');
    var todayMonth = today[1];
    var todayDay = today[2];
    var todayYear = today[3];
    var date = birthday.split(' ');
    var day = date[0];
    var month = date[1].slice(0, -1);
    var year = date[2];

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

    var age = 0;
    if (month > todayMonth) {
      age = todayYear - year - 1;
    } else {
      age = todayYear - year;
    }

    var calc = new _calc.Calc(age);
    var seconds = calc.yearsToSeconds();
    $('#seconds').html(calc.yearsToSeconds());
    $('#mercury').html(calc.earthToMercury());
    $('#venus').html(calc.earthToVenus());
    $('#mars').html(calc.earthToMars());
    $('#jupiter').html(calc.earthToJupiter());
    $('#expec').html(calc.lifeExpectency(region));
    $('#modal1').modal('open');
  });
});

},{"./../js/calc.js":1}]},{},[2]);
