/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst BULLET_GRAVITY = 1.25;\n\nclass Bullet {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.x = 112;\n    this.y = 672;\n    this.velX = 0;\n    this.velY = 0;\n    this.speed = 1;\n    this.firing = false;\n    this.hit = false;\n    this.explode = this.explode.bind(this);\n    this.fireBullet = this.fireBullet.bind(this);\n    this.calcTrajectory = this.calcTrajectory.bind(this);\n    this.draw = this.draw.bind(this);\n  }\n\n  fireBullet(mousePos) {\n    if (mousePos && !this.firing) {\n      this.speed = Math.min(100,\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.x, y: this.y }, mousePos)) / 3;\n      this.velX = Math.cos(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.x, y: this.y })) * this.speed;\n      this.velY = Math.sin(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.x, y: this.y })) * this.speed;\n      this.firing = true;\n    }\n  }\n\n  calcTrajectory() {\n    if (this.y <= 718 && this.firing) {\n      this.velY += BULLET_GRAVITY;\n      this.x += this.velX;\n      this.y += this.velY;\n    } else {\n      this.velX = 0;\n      this.velY = 0;\n      this.firing = false;\n    }\n  }\n\n  draw() {\n    this.calcTrajectory();\n    this.ctx.fillStyle = 'black';\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);\n    this.ctx.fill();\n    if (this.hit) this.explode();\n  }\n\n  explode() {\n    this.ctx.fillStyle = 'orange';\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI, true);\n    this.ctx.fill();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tank */ \"./src/tank.js\");\n\n\n\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.pulledBack = false;\n    this.firing = false;\n    this.bullets = [new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx)];\n    this.mouseUp = false;\n    this.mouseDown = false;\n    this.mousePos = { x: 0, y: 0 };\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n    this.update = this.update.bind(this);\n    this.render = this.render.bind(this);\n    this.run = this.run.bind(this);\n    this.welcome = this.welcome.bind(this);\n    this.reset = this.reset.bind(this);\n    this.welcome();\n  }\n\n  reset() {\n    location.reload();\n  }\n\n  welcome(){\n    this.ctx.font = '48px Arial';\n    this.ctx.fillText('TANX', 480, 100);\n  }\n\n  addShot() {\n    this.bullets.unshift(new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx));\n  }\n  \n  getMousePos(canvas, e) {\n    let rect = canvas.getBoundingClientRect();\n    this.mousePos = {\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    };\n    return {\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    };\n  }\n\n  isInCircle(mousePos) {\n    let dist = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos);\n    if (dist < 10) return true;\n    else return false;\n  }\n\n  getCoords(mousePos) {\n    let theta = Math.PI / 2 - Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.bullets[0].x, y: this.bullets[0].y });\n    let distance = Math.min(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos), 100);\n    let newX = this.bullets[0].x + distance * Math.sin(theta);\n    let newY = this.bullets[0].y + distance * Math.cos(theta);\n    return { x: newX, y: newY };\n  }\n\n  isFiring() {\n    if (this.mousePos && this.pulledBack && this.mouseUp) {\n      this.pulledBack = false;\n      this.firing = true;\n    } else {\n      this.firing = false;\n    }\n  }\n\n  isPulledBack() {\n    if (this.mousePos && this.isInCircle(this.mousePos)) {\n      if (this.mouseDown) this.pulledBack = true;\n      else if (this.mouseUp) this.pulledBack = false;\n    }\n  }\n\n  drawAimer() {\n    if (this.pulledBack) {\n      let aim = this.getCoords(this.mousePos);\n      this.ctx.beginPath();\n      this.ctx.moveTo(aim.x, aim.y);\n      this.ctx.lineTo(this.bullets[0].x, this.bullets[0].y);\n      this.ctx.strokeStyle = \"red\";\n      this.ctx.stroke();\n    }\n  }\n\n  isHit() {\n    this.bullets.forEach(bullet => {\n      this.level.enemies.forEach((tank, idx) => {\n        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: bullet.x, y: bullet.y }, { x: tank.x, y: tank.y }) < 40) {\n          tank.hit = true;\n          bullet.hit = true;\n          this.level.enemies.splice(idx, 1);\n          }\n        });\n    });\n  }\n\n  update() {\n    this.isPulledBack();\n    this.isFiring();\n    this.isHit();\n    if (this.firing) {\n      this.bullets[0].fireBullet(this.mousePos);\n      this.addShot();\n    }\n    this.ctx.clearRect(0, 0, 1024, 768);\n  }\n\n  render() {\n    //render level\n    this.level.render();\n    //draw the aimer\n    this.drawAimer();\n    //go through array of bullets, tanks, etc draw them all\n    this.bullets.forEach(bullet => bullet.draw());\n    this.welcome();\n  }\n\n  run() {\n    this.update();\n    this.render();\n    \n    if (this.level.enemies.length === 0) {\n      alert(\"you win\");\n      this.reset();\n    } else if (this.bullets.length > 9) {\n      alert(\"you have ran out of bullets and succumb to the enemy\");\n      this.reset();\n    } else {\n      requestAnimationFrame(this.run);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEle = document.getElementById('main-game');\n  canvasEle.width = 1024;\n  canvasEle.height = 768;\n\n  const context = canvasEle.getContext(\"2d\");\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"](context, canvasEle);\n  game.run();\n  \n\n  addEventListener(\"mousemove\", (e) => {\n    game.mousePos = game.getMousePos(canvasEle, e);\n  });\n\n  addEventListener(\"mousedown\", (e) => {\n    game.mousePos = game.getMousePos(canvasEle, e);\n    game.mouseDown = true;\n    game.mouseUp = false;\n  }); \n\n  addEventListener(\"mouseup\", (e) => {\n    game.mousePos = game.getMousePos(canvasEle, e);\n    game.mouseDown = false;\n    game.mouseUp = true;\n  }); \n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ \"./src/tank.js\");\n\n\nclass Level {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.player = [new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'player', [null,null])];\n    this.enemies = [new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'enemy', [700, 698]), new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'enemy', [600, 698]), new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 'enemy', [800, 698])];\n  }\n\n  drawBackground() {\n    this.ctx.fillStyle = 'lightblue';\n    this.ctx.fillRect(0,0, 1024, 718);\n    this.ctx.fillStyle = 'green';\n    this.ctx.fillRect(0, 718, 1024, 50);\n  }\n\n  render() {\n    this.drawBackground();\n    this.player[0].render();\n    this.enemies.forEach(enemy => enemy.render());\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/tank.js":
/*!*********************!*\
  !*** ./src/tank.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Tank {\n  constructor(ctx, type, pos) {\n    this.ctx = ctx;\n    this.type = type;\n    this.x = pos[0];\n    this.y = pos[1];\n    this.hit = false;\n  }\n\n  render(){\n    if (this.type === 'player') {\n        this.playerTank();\n    } else {\n        this.enemyTank();\n    }\n  }\n\n\n  playerTank() {\n    this.ctx.fillStyle = 'black';\n    this.ctx.fillRect(50, 698, 50, 20);\n    this.ctx.beginPath();\n    this.ctx.moveTo(62, 698);\n    this.ctx.lineTo(75, 686);\n    this.ctx.lineTo(88, 698);\n    this.ctx.fill();\n    this.ctx.beginPath();\n    this.ctx.moveTo(80, 690);\n    this.ctx.lineTo(110, 670);\n    this.ctx.lineTo(113, 675);\n    this.ctx.lineTo(85, 695);\n    this.ctx.fill();\n    this.x = 50;\n    this.y = 698;\n  }\n\n  enemyTank() {\n    this.ctx.fillStyle = 'red';\n    this.ctx.fillRect(this.x, this.y, 50, 20);\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x + 12, this.y);\n    this.ctx.lineTo(this.x + 25, this.y - 12);\n    this.ctx.lineTo(this.x + 38, this.y);\n    this.ctx.fill();\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.x + 18, 690);\n    this.ctx.lineTo(this.x - 10, 670);\n    this.ctx.lineTo(this.x - 7, 675);\n    this.ctx.lineTo(this.x + 23, 695);\n    this.ctx.fill();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tank);\n\n//# sourceURL=webpack:///./src/tank.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: power, angle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"power\", function() { return power; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"angle\", function() { return angle; });\nconst power = (p1, p2) => {\n  return Math.sqrt(((p2.x - p1.x) * (p2.x - p1.x)) + ((p2.y - p1.y) * (p2.y - p1.y)));\n};\n\nconst angle = (p1, p2) => (\n  Math.atan2(p2.y - p1.y, p2.x - p1.x)\n);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });