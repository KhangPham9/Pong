import Rectangle from './rectangle.js';

class Paddles {}

class Paddle {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.rect = new Rectangle(ctx, settings.paddle);
  }

  draw() { this.rect.draw(); }
}

export default Paddle;
