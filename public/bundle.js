/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CatLyf = __webpack_require__(3);
	ReactDOM.render(React.createElement(CatLyf, null), document.getElementById('container'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stream = __webpack_require__(4);
	var Sidebar = __webpack_require__(2);
	var CatLyf = React.createClass({
		displayName: 'CatLyf',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'catLyf' },
				React.createElement(Stream, null)
			);
		}
	});

	module.exports = CatLyf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cat = __webpack_require__(5);

	var dummyCats = [{
		pic: "https://fillmurray.com/300/300",
		fact: 'A cat lives an average of 1000 years'

	}, {
		pic: "https://fillmurray.com/300/301",
		fact: 'A cat was trying to jump through a window'
	}, {
		pic: "https://fillmurray.com/301/300",
		fact: 'A cat used to poo on my bed daily'
	}];

	var Stream = React.createClass({
		displayName: 'Stream',


		getInitialState: function getInitialState() {
			return {
				cats: dummyCats
			};
		},

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'stream' },
				this.state.cats.map(function (cat, i) {
					return React.createElement(Cat, { key: i, pic: cat.pic, fact: cat.fact, catId: i });
				})
			);
		}
	});

	module.exports = Stream;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	var Cat = React.createClass({
		displayName: "Cat",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "cat", id: this.props.catId },
				React.createElement("img", { src: this.props.pic }),
				React.createElement(
					"span",
					null,
					this.props.fact
				)
			);
		}
	});

	module.exports = Cat;

/***/ }
/******/ ]);