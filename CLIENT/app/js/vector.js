class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  scalarMul(k) {
    this.x *= k;
    this.y *= k;
  }

  dot(v) { return this.x * v2.x + this.y * v2.y; }

  magnitude() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }

  normalize() {
    let magnitude = this.magnitude;
    this.x /= magnitude;
    this.y /= magnitude;
  }
}

export default Vector2;
