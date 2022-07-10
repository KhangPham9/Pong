import Ball from './ball.js';
import Paddles from './paddle.js'

class Game {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = settings;
    this.paddles = new Paddles(this.ctx, settings.topPaddle, 
                               settings.bottomPaddle);
    this.ball = new Ball(this.ctx, this.settings.ball.circle,
                         this.settings.ball.velocity,
                         this.settings.ball.speedFactor);

    this.gameOver = false;
    this.startTime;
  }

  start() {
    this.draw();
  }

  draw(startTime) {

    this.clearCanvas();
    this.update();
    this.paddles.draw();
    this.ball.draw();


    if (!this.gameOver)
      window.requestAnimationFrame(this.draw.bind(this) );
  }

  update() {
    this.ball.update();
    this.paddles.update();
  }

  clearCanvas() {
    let canvas = document.getElementById('canvas');
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


}

export default Game;
