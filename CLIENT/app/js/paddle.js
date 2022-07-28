import Rectangle from './rectangle.js';
import Input from './input.js';
import Vector from './vector.js';


class Paddle {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = settings;
    this.rect = new Rectangle(ctx, settings.paddle);
    this.vel = new Vector(0 ,0);
    this.speedFactor = settings.speedFactor;
    this.input = new Input(this.vel, settings.keys);

    this.canvasWidth = document.getElementById('canvas').width;
  }

  draw() { this.rect.draw(); }

  update() {
    this.rect.topLeftPos.x += this.vel.x * this.speedFactor;
    this.rect.topLeftPos.y += this.vel.y * this.speedFactor;
    this.checkBounds();
  }

  checkBounds() {
    if (this.rect.topLeftPos.x < 0){
      this.rect.topLeftPos.x = 0;
    } else if (this.rect.topLeftPos.x + this.rect.width >= this.canvasWidth) {
      this.rect.topLeftPos.x = this.canvasWidth - this.rect.width;
    }
  }

  changeBounds() {
    this.canvasWidth = document.getElementById('canvas').width;
    this.checkBounds();
    this.rect.topLeftPos.y = this.rect.calcYCoord(this.settings.paddle.y);
    this.rect.width = this.rect.calcWidth(this.settings.paddle.width);
  }
}

class Paddles {
  constructor(ctx, topPaddleSettings, bottomPaddleSettings) {
    this.ctx = ctx;
    this.paddle1 = new Paddle(this.ctx, topPaddleSettings);
    this.paddle2 = new Paddle(this.ctx, bottomPaddleSettings); 
  }

  draw() {
    this.paddle1.draw();
    this.paddle2.draw();
  }

  update() {
    this.paddle1.update();
    this.paddle2.update();
  }

  changeBounds() {
    this.paddle1.changeBounds();
    this.paddle2.changeBounds();
  }
}
export default Paddles;
