

class Level {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawBackground() {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0,0, 1024, 718);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 718, 1024, 50);
  }

  render() {
    this.drawBackground();
  }

}

export default Level;