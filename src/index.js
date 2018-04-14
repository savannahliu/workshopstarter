import $ from 'jquery'; // es6
import './style.scss';

let num = 0;

function seconds() {
  const text = `You have been on this page for ${num} seconds`;
  $('#main').html(text);
  num += 1;
}

setInterval(seconds, 1000);
