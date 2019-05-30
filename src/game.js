import { angle, power } from './util';
import Bullet from './bullet';
import Level from './level';
import Tank from './tank';


class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.pulledBack = false;
    this.firing = false;
    this.bullets = [new Bullet(ctx)];
    this.mouseUp = false;
    this.mouseDown = false;
    this.mousePos = { x: 0, y: 0 };
    this.level = new Level(ctx);
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

  isHit() {
    this.bullets.forEach(bullet => {
      this.level.enemies.forEach((tank, idx) => {
        if (power({ x: bullet.x, y: bullet.y }, { x: tank.x, y: tank.y }) < 40) {
          tank.hit = true;
          bullet.hit = true;
          this.level.enemies.splice(idx, 1);
          }
        });
    });
  }

  update() {
    this.isPulledBack();
    this.isFiring();
    this.isHit();
    if (this.firing) {
      this.bullets[0].fireBullet(this.mousePos);
    }
    this.ctx.clearRect(0, 0, 1024, 768);
  }

  render() {
    //render level
    this.level.render();
    //draw the aimer
    this.drawAimer();
    //go through array of bullets, tanks, etc draw them all
    this.bullets.forEach(bullet => bullet.draw());
  }

  run() {
    this.update();
    this.render();
    requestAnimationFrame(this.run);
  }
}

export default Game;