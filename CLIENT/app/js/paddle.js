import Rectangle from './rectangle.js';

class Paddles {}

class Paddle {
  constructor(ctx, x, y, width, height, color = 'grey') {
    this.ctx = ctx;
    this.rect = new Rectangle(ctx, x, y, width, height, color);
  }

  draw() { this.rect.draw(); }
}

export default Paddle;
