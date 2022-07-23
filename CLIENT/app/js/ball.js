import Circle from './circle.js';
import Vector2 from './vector.js';

class Ball {
  constructor(ctx, ball, speed, speedFactor = 1) {
    this.ctx = ctx;
    this.circle = new Circle(ctx, ball);
    this.vel = new Vector2(speed.x, speed.y);
    this.speedFactor = speedFactor;
    this.canvasW = document.getElementById('canvas').width;
    this.canvasH = document.getElementById('canvas').height;
    this.top = document.getElementsByClassName('score-col')[0].offsetHeight;
  }

  draw() { this.circle.draw(); }

  update(scoreboard) {
    this.move();
    this.checkBounds(scoreboard);
  }
  move() {
    let velocity = new Vector2(this.vel.x, this.vel.y);
    velocity.scalarMul(this.speedFactor);
    this.circle.pos.add(velocity);
  }

  changeVel(delx = 0, dely = 0) { this.vel = new Vector2(delx, dely); }

  changeBounds() {
    this.canvasW = document.getElementById('canvas').width;
    this.canvasH = document.getElementById('canvas').height;
    this.top = document.getElementsByClassName('score-col')[0].offsetHeight;
  }

  checkRightCollison() {
    return this.circle.pos.x + this.circle.radius >= this.canvasW;
  }
  checkLeftCollison() {
    return this.circle.pos.x <= 0 + this.circle.radius;
  }
  checkTopCollision() {
    return this.circle.pos.y <= this.circle.radius + this.top;
  }
  checkBottomCollision() {
    return this.circle.pos.y + this.circle.radius >= this.canvasH;
  }

  checkBounds(scoreboard) {
    if (this.checkRightCollison()) {
      this.circle.pos.x = this.canvasW - this.circle.radius;
      this.changeVel(this.vel.x * -1, this.vel.y);
    } else if (this.checkLeftCollison()) {
      this.circle.pos.x = this.circle.radius;
      this.changeVel(this.vel.x * -1, this.vel.y);
    }
    if (this.checkBottomCollision()) {
      this.circle.pos.y = this.canvasH - this.circle.radius;
      this.changeVel(this.vel.x, this.vel.y * -1);
      scoreboard.incP1();
    } else if (this.checkTopCollision()) {
      this.circle.pos.y = this.circle.radius + this.top;
      this.changeVel(this.vel.x, this.vel.y * -1);
      scoreboard.incP2();
    }
  }
}

export default Ball;
