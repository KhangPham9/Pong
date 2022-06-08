import Circle from './circle.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.circle = new Circle(this.ctx, 15, 'red', 50, 50, 1, 1, 2);
  }

  start() {
    this.draw();
  }

  draw() {
    this.update();
    this.clearCanvas();
    this.circle.draw();
    window.requestAnimationFrame(this.draw.bind(this));
  }

  update() {
    this.circle.update();
  }

  clearCanvas() {
    let canvas = document.getElementById('canvas');
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }


}

export default Game;
