import Vector2 from './vector.js';

class Circle {

  constructor(ctx, r, x, y, color = 'red') {
    this.ctx = ctx;
    this.radius = r;
    this.color = color;
    this.pos = new Vector2(x, y);
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
}

export default Circle;
