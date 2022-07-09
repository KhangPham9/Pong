class Rectangle {
  constructor(ctx, x, y, width, height, color) {
    this.ctx = ctx;
    this.topLeftPos = {x : x, y : y};
    this.width = width;
    this.height = height;
    this.color = color;
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
