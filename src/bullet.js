import { angle, power } from './util';

const BULLET_GRAVITY = 1.25;

class Bullet {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 112;
    this.y = 672;
    this.velX = 0;
    this.velY = 0;
    this.speed = 1;
    this.firing = false;
    this.hit = false;
    this.explode = this.explode.bind(this);
    this.fireBullet = this.fireBullet.bind(this);
    this.calcTrajectory = this.calcTrajectory.bind(this);
    this.draw = this.draw.bind(this);
  }

  fireBullet(mousePos) {
    if (mousePos && !this.firing) {
      this.speed = Math.min(100,
        power({ x: this.x, y: this.y }, mousePos)) / 3;
      this.velX = Math.cos(angle(mousePos, { x: this.x, y: this.y })) * this.speed;
      this.velY = Math.sin(angle(mousePos, { x: this.x, y: this.y })) * this.speed;
      this.firing = true;
    }
  }

  calcTrajectory() {
    if (this.y <= 718 && this.firing) {
      this.velY += BULLET_GRAVITY;
      this.x += this.velX;
      this.y += this.velY;
    } else {
      this.velX = 0;
      this.velY = 0;
      this.firing = false;
    }
  }

  draw() {
    this.calcTrajectory();
    this.ctx.fillStyle = 'black';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);
    this.ctx.fill();
    if (this.hit) this.explode();
  }

  explode() {
    this.ctx.fillStyle = 'orange';
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI, true);
    this.ctx.fill();
  }

}

export default Bullet;
