import Circle from './circle.js';
import Vector2 from './vector.js';

class Ball {
  constructor(ctx, r, c, x, y, delx = 0, dely = 0, speedFactor = 1) {
    this.ctx = ctx;
    this.circle = new Circle(ctx, r, x, y, c);
    this.vel = new Vector2(delx, dely);
    this.speedFactor = speedFactor;
    this.canvasW = document.getElementById('canvas').width;
    this.canvasH = document.getElementById('canvas').height;
  }

  draw() { this.circle.draw(); }

  update() {
    this.move();
    this.checkBounds();
  }
  move() {
    let velocity = new Vector2(this.vel.x, this.vel.y);
    velocity.scalarMul(this.speedFactor);
    this.circle.pos.add(velocity);
  }

  changeVel(delx = 0, dely = 0) { this.vel = new Vector2(delx, dely); }

  checkBounds() {
    if (this.circle.pos.x + this.circle.radius >= this.canvasW) {
      this.circle.pos.x = this.canvasW - this.circle.radius;
      this.changeVel(this.vel.x * -1, this.vel.y);
    } else if (this.circle.pos.x <= 0 + this.circle.radius) {
      this.circle.pos.x = this.circle.radius;
      this.changeVel(this.vel.x * -1, this.vel.y);
    }
    if (this.circle.pos.y + this.circle.radius >= this.canvasH) {
      this.circle.pos.y = this.canvasH - this.circle.radius;
      this.changeVel(this.vel.x, this.vel.y * -1);

    } else if (this.circle.pos.y <= 0 + this.circle.radius) {
      this.circle.pos.y = this.circle.radius;
      this.changeVel(this.vel.x, this.vel.y * -1);
    }
  }
}

export default Ball;