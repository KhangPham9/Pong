import Vector2 from './vector.js';

class Rectangle {
  constructor(ctx, {x, y, width, height, color}) {
    this.ctx = ctx;
    this.topLeftPos = new Vector2(this.calcXCoord(x), this.calcYCoord(y));
    this.width = this.calcWidth(width);
    this.height = this.calcHeight(height);
    this.color = color;
  }

  calcXCoord(x) {
    return x * window.innerWidth;
  }
  calcYCoord(y) {
    return y * window.innerHeight;
  }

  calcWidth(width) {
    return window.innerWidth * width;
  }

  calcHeight(height) {
    return window.innerHeight * height;
  }

  draw() {
    this.ctx.fillStyle = this.color;

    // including .beginPath somehow fixed weird double drawing of the ball bug 
    this.ctx.beginPath();
    this.ctx.rect(this.topLeftPos.x, this.topLeftPos.y, this.width,
                  this.height);
    this.ctx.closePath();

    this.ctx.fill();
  }
}

export default Rectangle;
