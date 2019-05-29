import { angle, power } from './util';
import Bullet from './bullet';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEle = document.getElementById('main-game');
  canvasEle.width = 1024;
  canvasEle.height = 768;

  const context = canvasEle.getContext("2d");

  let game = new Game(context, canvasEle);
  game.run();
  

  addEventListener("mousemove", (e) => {
    game.mousePos = game.getMousePos(canvasEle, e);
  });

  addEventListener("mousedown", (e) => {
    game.mousePos = game.getMousePos(canvasEle, e);
    game.mouseDown = true;
    game.mouseUp = false;
  }); 

  addEventListener("mouseup", (e) => {
    game.mousePos = game.getMousePos(canvasEle, e);
    game.mouseDown = false;
    game.mouseUp = true;
  }); 

});