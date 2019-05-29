import { angle, power } from './util';
import Bullet from './bullet';


class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = 0.4;
    this.ground = 1024 - (1024 / 6);
    this.pulledBack = false;
    this.firing = false;
    this.bullets = [new Bullet()];
    this.mouseUp = false;
    this.mouseDown = false;
    this.mousePos = { x: 0, y: 0 };
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.run = this.run.bind(this);
  }
  
  getMousePos(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    this.mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  isInCircle(mousePos) {
    let dist = power({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos);
    if (dist < 10) return true;
    else return false;
  }

  getCoords(mousePos) {
    let theta = Math.PI / 2 - angle(mousePos, { x: this.bullets[0].x, y: this.bullets[0].y });
    let distance = Math.min(power({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos), 100);
    let newX = this.bullets[0].x + distance * Math.sin(theta);
    let newY = this.bullets[0].y + distance * Math.cos(theta);
    return { x: newX, y: newY };
  }

  isFiring() {
    if (this.mousePos && this.pulledBack && this.mouseUp) {
      this.pulledBack = false;
      this.firing = true;
    }
  }

  isPulledBack() {
    if (this.mousePos && this.isInCircle(this.mousePos)) {
      if (this.mouseDown) this.pulledBack = true;
      else if (this.mouseUp) this.pulledBack = false;
    }
  }

  drawCircle() {
    if (!this.firing) {
      this.ctx.beginPath();
      this.ctx.arc(this.bullets[0].x, this.bullets[0].y, 100, 0, 2 * Math.PI);
      this.ctx.strokeStyle = "red";
      this.ctx.stroke();
      this.drawAimer();
    }
  }

  drawAimer() {
    if (this.pulledBack) {
      let aim = this.getCoords(this.mousePos);
      this.ctx.beginPath();
      this.ctx.moveTo(aim.x, aim.y);
      this.ctx.lineTo(this.bullets[0].x, this.bullets[0].y);
      this.ctx.strokeStyle = "red";
      this.ctx.stroke();
    }
  }

  update() {
    this.isPulledBack();
    this.isFiring();
    if (this.firing) {
      this.bullets[0].fireBullet(this.mousePos);
    }
    this.ctx.clearRect(0, 0, 1024, 768);
  }

  render() {
    this.drawCircle();
    this.bullets[0].draw(this.ctx);
  }

  run() {
    this.update();
    this.render();
    requestAnimationFrame(this.run);
  }


}

export default Game;