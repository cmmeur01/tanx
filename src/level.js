import Tank from './tank';

class Level {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = [new Tank(ctx, 'player', [null,null])];
    this.enemies = [new Tank(ctx, 'enemy', [700, 698]), new Tank(ctx, 'enemy', [600, 698]), new Tank(ctx, 'enemy', [800, 698])];
  }

  drawBackground() {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0,0, 1024, 718);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 718, 1024, 50);
  }

  render() {
    this.drawBackground();
    this.player[0].render();
    this.enemies.forEach(enemy => enemy.render());
  }

}

export default Level;