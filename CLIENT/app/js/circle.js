class Circle {
  constructor(ctx, r, c, x = 0, y = 0, delx = 0, dely = 0, speedFactor = 1) {
    this.ctx = ctx;
    this.radius = r;
    this.color = c;
    this.posVec = {x : x, y : y};
    this.velVec = {x : delx, y : dely};
    this.speedFactor = speedFactor;
    this.canvasW = document.getElementById('canvas').width;
    this.canvasH = document.getElementById('canvas').height;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(this.posVec.x, this.posVec.y, this.radius, 0, 360);
    this.ctx.stroke();
    this.ctx.fill();
  }

  move() {
    this.posVec.x += this.velVec.x * this.speedFactor;
    this.posVec.y += this.velVec.y * this.speedFactor;
  }

  changeVel(delx = 0, dely = 0) {
    this.velVec.x = delx;
    this.velVec.y = dely;
  }

  checkBounds() {
    if (this.posVec.x + this.radius >= this.canvasW) {
      this.posVec.x = this.canvasW - this.radius;
      this.changeVel(this.velVec.x * -1, this.velVec.y);
    } else if (this.posVec.x <= 0 + this.radius) {
      this.posVec.x = this.radius;
      this.changeVel(this.velVec.x * -1, this.velVec.y);
    }
    if (this.posVec.y + this.radius >= this.canvasH) {
      this.posVec.y = this.canvasH - this.radius;
      this.changeVel(this.velVec.x, this.velVec.y * -1);

    } else if (this.posVec.y <= 0 + this.radius) {
      this.posVec.y = this.radius;
      this.changeVel(this.velVec.x, this.velVec.y * -1);
    }
  }

  update() {
    this.move();
    this.checkBounds();
  }
}

export default Circle;
