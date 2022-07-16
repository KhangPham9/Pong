import Game from './game.js';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// retrieves the config.json file
fetch(new Request('config.json'))
.then((response) => {
  // .json() returns a promise which will resolve and
  // return a javascript object of the response.
  return response.json();
})
.then((json) => {
	let game = new Game(context, json);
	game.start();
});
