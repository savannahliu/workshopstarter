import $ from 'jquery'; // es6

/* set interval https://www.w3schools.com/js/js_timing.asp */
let num = 0;
num = setInterval(myTimer, 1000);

function myTimer() {
  let text = 'You have been on this page for ' + num +' seconds';
  $('#main').html(text);
  num++;
}
