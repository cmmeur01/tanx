import { angle, power } from './util';

const BULLET_GRAVITY = 0.5;

class Bullet {
  constructor() {
    this.x = 200;
    this.y = 475;
    this.velX = 0;
    this.velY = 0;
    this.speed = 1;
    this.firing = false;
  }

  fireBullet(mousePos) {
    if (mousePos && !this.firing) {
      this.speed = Math.min(100,
        power({ x: this.x, y: this.y }, mousePos)) / 4;
      this.velX = Math.cos(angle(mousePos, { x: this.x, y: this.y })) * this.speed;
      this.velY = Math.sin(angle(mousePos, { x: this.x, y: this.y })) * this.speed;
      this.firing = true;
    }
  }

  calcTrajectory() {
    if (this.y <= 678 && this.firing) {
      this.velY += BULLET_GRAVITY;
      this.x += this.velX;
      this.y += this.velY;
    } else {
      this.velX = 0;
      this.velY = 0;
      this.firing = false;
    }
  }

  draw(ctx) {
    this.calcTrajectory();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);
    ctx.fill();
  }

}

export default Bullet;
