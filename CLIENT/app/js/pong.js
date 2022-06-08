import Game from './game.js';

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let game = new Game(context);
game.start();
