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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nconst BULLET_GRAVITY = 0.5;\n\nclass Bullet {\n  constructor() {\n    this.x = 200;\n    this.y = 475;\n    this.velX = 0;\n    this.velY = 0;\n    this.speed = 1;\n    this.firing = false;\n  }\n\n  fireBullet(mousePos) {\n    if (mousePos && !this.firing) {\n      this.speed = Math.min(100,\n        Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.x, y: this.y }, mousePos)) / 4;\n      this.velX = Math.cos(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.x, y: this.y })) * this.speed;\n      this.velY = Math.sin(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.x, y: this.y })) * this.speed;\n      this.firing = true;\n    }\n  }\n\n  calcTrajectory() {\n    if (this.y <= 678 && this.firing) {\n      this.velY += BULLET_GRAVITY;\n      this.x += this.velX;\n      this.y += this.velY;\n    } else {\n      this.velX = 0;\n      this.velY = 0;\n      this.firing = false;\n    }\n  }\n\n  draw(ctx) {\n    this.calcTrajectory();\n    ctx.fillStyle = 'black';\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);\n    ctx.fill();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.gravity = 0.4;\n    this.ground = 1024 - (1024 / 6);\n    this.pulledBack = false;\n    this.firing = false;\n    this.bullets = [new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()];\n    this.mouseUp = false;\n    this.mouseDown = false;\n    this.mousePos = { x: 0, y: 0 };\n    this.update = this.update.bind(this);\n    this.render = this.render.bind(this);\n    this.run = this.run.bind(this);\n  }\n  \n  getMousePos(canvas, e) {\n    let rect = canvas.getBoundingClientRect();\n    this.mousePos = {\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    };\n    return {\n      x: e.clientX - rect.left,\n      y: e.clientY - rect.top\n    };\n  }\n\n  isInCircle(mousePos) {\n    let dist = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos);\n    if (dist < 10) return true;\n    else return false;\n  }\n\n  getCoords(mousePos) {\n    let theta = Math.PI / 2 - Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"angle\"])(mousePos, { x: this.bullets[0].x, y: this.bullets[0].y });\n    let distance = Math.min(Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"power\"])({ x: this.bullets[0].x, y: this.bullets[0].y }, mousePos), 100);\n    let newX = this.bullets[0].x + distance * Math.sin(theta);\n    let newY = this.bullets[0].y + distance * Math.cos(theta);\n    return { x: newX, y: newY };\n  }\n\n  isFiring() {\n    if (this.mousePos && this.pulledBack && this.mouseUp) {\n      this.pulledBack = false;\n      this.firing = true;\n    }\n  }\n\n  isPulledBack() {\n    if (this.mousePos && this.isInCircle(this.mousePos)) {\n      if (this.mouseDown) this.pulledBack = true;\n      else if (this.mouseUp) this.pulledBack = false;\n    }\n  }\n\n  drawCircle() {\n    if (!this.firing) {\n      this.ctx.beginPath();\n      this.ctx.arc(this.bullets[0].x, this.bullets[0].y, 100, 0, 2 * Math.PI);\n      this.ctx.strokeStyle = \"red\";\n      this.ctx.stroke();\n      this.drawAimer();\n    }\n  }\n\n  drawAimer() {\n    if (this.pulledBack) {\n      let aim = this.getCoords(this.mousePos);\n      this.ctx.beginPath();\n      this.ctx.moveTo(aim.x, aim.y);\n      this.ctx.lineTo(this.bullets[0].x, this.bullets[0].y);\n      this.ctx.strokeStyle = \"red\";\n      this.ctx.stroke();\n    }\n  }\n\n  update() {\n    this.isPulledBack();\n    this.isFiring();\n    if (this.firing) {\n      this.bullets[0].fireBullet(this.mousePos);\n    }\n    this.ctx.clearRect(0, 0, 1024, 768);\n  }\n\n  render() {\n    this.drawCircle();\n    this.bullets[0].draw(this.ctx);\n  }\n\n  run() {\n    this.update();\n    this.render();\n    requestAnimationFrame(this.run);\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

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