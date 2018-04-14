import $ from 'jquery'; // es6
import './style.scss';

/* set interval https://www.w3schools.com/js/js_timing.asp */
let num = 0;

function myTimer() {
  const text = `You have been on this page for ${num} seconds`;
  $('#main').html(text);
  num += 1;
}

num = setInterval(myTimer, 1000);
