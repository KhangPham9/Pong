import Ball from './ball.js';
import Paddle from './paddle.js'

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // console.log(this.ctx.fillStyle);
    this.paddle1 = new Paddle(this.ctx, 50, 50, 100, 25, 'grey');
    this.paddle2 = new Paddle(this.ctx, 50, 725, 100, 25, 'lightblue');
    this.ball = new Ball(this.ctx, 15, 'red', 50, 50, 2, 1, 2);
    // console.log(this.ctx.fillStyle);

    this.gameOver = false;
    this.startTime;
  }

  start() {
    this.draw();
  }

  draw(startTime) {

    this.clearCanvas();
    this.update();

    // console.log(this.ctx.fillStyle);
    this.paddle1.draw();
    this.paddle2.draw();
    this.ball.draw();
//
    // console.log(this.ctx.fillStyle);

    // console.log(this.ctx.fillStyle);

    if (!this.gameOver)
      window.requestAnimationFrame(this.draw.bind(this) );
  }

  update() {
    this.ball.update();
  }

  clearCanvas() {
    let canvas = document.getElementById('canvas');
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


}

export default Game;
