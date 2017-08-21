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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6)
__webpack_require__(2)

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

new Vue({
  el: '#root',
  data: {
  	info: {
  		name: 'Andrew Khokhlov',
  		pic: '/images/pic.jpg',
  		links: {
  			git: 'https://github.com/TheDoubleRainbow',
  			facebook: "https://www.facebook.com/profile.php?id=100001883050092&ref=bookmarks",
  			twitter: 'https://twitter.com/aaaasdd1?lang=ru',
  			linkin: 'https://www.linkedin.com/in/andrew-khokhlov-717924127/',
  			mail: '16mb.com@gmail.com'
  		}
  	}
  }
})

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

Vue.component('info', {
	template: `
		<div id="top">
			<div id="top-info">
				<img v-show="info.pic" id="top-pic" :src="info.pic"/><br />
				<span v-show="info.name" id="top-greeting">Hello, my name is <span id="top-name">{{info.name}}</span></span>
				<span id="top-iam">i'm web developer</span>
			</div>
			<div id="top-social">
				<div id="mail">
					{{info.links.mail}}
				</div
				<a :href="info.links.git"><img id="git" class="icon" src="/images/icons/github.png" /></a>
				<a :href="info.links.linkedin"><img class="icon margin-icon" src="/images/icons/linkedin.png" /></a>
				<a :href="info.links.facebook"><img class="icon margin-icon" src="/images/icons/facebook.jpg" /></a>
				<a :href="info.links.twitter"><img class="icon" src="/images/icons/twitter.jpg" /></a>
			</div>
		</div>
	`,
	props: ["info"]
})

/***/ })
/******/ ]);