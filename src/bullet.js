import { angle, power } from './util';

const BULLET_GRAVITY = 1.25;

class Bullet {
  constructor() {
    this.x = 100;
    this.y = 718;
    this.velX = 0;
    this.velY = 0;
    this.speed = 1;
    this.firing = false;
    this.explode = this.explode.bind(this);
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

  //explosion taken care of here currently, will move to "isHit"
  //method eventually
  calcTrajectory(ctx) {
    if (this.y <= 718 && this.firing) {
      this.velY += BULLET_GRAVITY;
      this.x += this.velX;
      this.y += this.velY;
    } else if (this.y > 718 && this.firing) {
      this.explode(ctx);
      this.velX = 0;
      this.velY = 0;
      this.firing = false;
    } else {
      this.velX = 0;
      this.velY = 0;
      this.firing = false;
    }
  }

  draw(ctx) {
    this.calcTrajectory(ctx);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  explode(ctx) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI, true);
    ctx.fill();
  }

}

export default Bullet;
