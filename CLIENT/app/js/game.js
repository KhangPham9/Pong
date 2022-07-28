import Ball from './ball.js';
import Paddles from './paddle.js';
import Resize from './resize.js';
import ScoreBoard from './scoreboard.js';
import Menu from './menu.js';

class Game {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = settings;
    this.menu = new Menu();
    this.resize = new Resize();
    
    this.paddles = new Paddles(this.ctx, settings.topPaddle, 
                               settings.bottomPaddle);
    this.ball = new Ball(this.ctx, this.settings.ball.circle,
                         this.settings.ball.velocity,
                         this.settings.ball.speedFactor);

    this.scoreboard = new ScoreBoard();

    this.gameOver = false;

  }

  start() {
    this.gameLoop();
  }

  gameLoop(startTime) {
    if(this.resize.flag) {
      this.ball.changeBounds();
      this.paddles.changeBounds();
      this.resize.flag = false;
    }
    if (!this.menu.show) {
      this.clearCanvas();
      this.update();
      this.draw();

    }

    if(!this.gameOver){
      window.requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  draw() {
    this.paddles.draw();
    this.ball.draw();    
  }

  update() {
    this.ball.update(this.scoreboard);
    this.paddles.update();
  }

  clearCanvas() {
    let canvas = document.getElementById('canvas');
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


}

export default Game;
