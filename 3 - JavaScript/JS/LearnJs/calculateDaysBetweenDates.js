// Path: 3 - JavaScript/JS/LearnJs/calculateDaysBetweenDates.js
function calculateDaysBetweenDates(date1, date2) {  
  var diff = date2.getTime() - date1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}   

calculateDaysBetweenDates(new Date(2017, 3, 1), new Date(2017, 3, 4));
