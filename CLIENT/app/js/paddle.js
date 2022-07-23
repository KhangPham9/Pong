import Rectangle from './rectangle.js';
import Input from './input.js';
import Vector from './vector.js';


class Paddle {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.rect = new Rectangle(ctx, settings.paddle);
    this.vel = new Vector(0 ,0);
    this.speedFactor = settings.speedFactor;
    this.input = new Input(this.vel, settings.keys);
  }

  draw() { this.rect.draw(); }

  update() {
    this.rect.topLeftPos.x += this.vel.x * this.speedFactor;
    this.rect.topLeftPos.y += this.vel.y * this.speedFactor;
  }

  changeBounds() {
    this.rect.topLeftPos.y = 0;
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
}
export default Paddles;
