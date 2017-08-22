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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_info_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_skills_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_skills_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_skills_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_index_vue__);






/***/ }),
/* 1 */
/***/ (function(module, exports) {

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

/***/ }),
/* 2 */
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
				<a v-show="info.links.git" :href="info.links.git"><img id="git" class="icon" src="/images/icons/github.png" /></a>
				<a v-show="info.links.linkin" :href="info.links.linkin"><img id="linkedin" class="icon margin-icon" src="/images/icons/linkedin.png" /></a>
				<a v-show="info.links.facebook" :href="info.links.facebook"><img id="facebook" class="icon margin-icon" src="/images/icons/facebook.jpg" /></a>
				<a v-show="info.links.twitter" :href="info.links.twitter"><img id="twitter" class="icon" src="/images/icons/twitter.jpg" /></a>
			</div>
		</div>
	`,
	props: ["info"]
})


/***/ }),
/* 3 */
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
  	},
  	skills: {
  		list: [{name: 'JavaScript', level: 5}, {name: 'Vue.js', level: 4}, {name: 'React', level: 3}]
  	}
  },
  methods:{
  	
  }
})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

Vue.component('skills', {
	template: `
		<div id="skills">
			<div class="skill" v-for="skill in skills.list">
				<div>{{skill.name}}</div><div>{{getRating(skill.level)}}</div>
			</div>
		</div>
	`,
	props: ["skills"],
	methods: {
		getRating(level){
			let code = "<div>";
			for(let i= 0; i < level; i++){
				code += "<div class='marked'><div></div></div>"
			}
			if(5-level>0){
				for(let i = 0; i < 5-level; i++){
					code += "<div class='unmarked'><div></div></div>"
				}
			}
			code += '</div>'
		}
	}
})

/***/ })
/******/ ]);