class Tank {
  constructor(ctx, type, pos) {
    this.ctx = ctx;
    this.type = type;
    this.x = pos[0];
    this.y = pos[1];
    this.hit = false;
  }

  render(){
    if (this.type === 'player') {
        this.playerTank();
    } else {
        this.enemyTank();
    }
  }


  playerTank() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(50, 698, 50, 20);
    this.ctx.beginPath();
    this.ctx.moveTo(62, 698);
    this.ctx.lineTo(75, 686);
    this.ctx.lineTo(88, 698);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(80, 690);
    this.ctx.lineTo(110, 670);
    this.ctx.lineTo(113, 675);
    this.ctx.lineTo(85, 695);
    this.ctx.fill();
    this.x = 50;
    this.y = 698;
  }

  enemyTank() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, 50, 20);
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 12, this.y);
    this.ctx.lineTo(this.x + 25, this.y - 12);
    this.ctx.lineTo(this.x + 38, this.y);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 18, 690);
    this.ctx.lineTo(this.x - 10, 670);
    this.ctx.lineTo(this.x - 7, 675);
    this.ctx.lineTo(this.x + 23, 695);
    this.ctx.fill();
  }

}

export default Tank;