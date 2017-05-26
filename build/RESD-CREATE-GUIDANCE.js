(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _validation = require('./validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RESDInit() {
	_validation2.default.initToggleCheck();
	$('div[data-applylc]').on('change', _validation2.default.toggleCheck);
}

sits_attach_event('window', 'load', function () {
	RESDInit();
});

},{"./validation":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	initToggleCheck: function initToggleCheck() {
		if (this.applyToggleCheck()) {
			this.bindToggleChecks();
			this.toggleCheck();
		} else {
			return false;
		}
	},
	toggleCheck: function toggleCheck() {
		$('input[data-applylc]:checked').length > 0 ? $('input[value="Next"]').first().prop('disabled', false) : $('input[value="Next"]').first().prop('disabled', true);
	},
	applyToggleCheck: function applyToggleCheck() {
		return $('div[data-applylc]').length > 0;
	},
	bindToggleChecks: function bindToggleChecks() {
		$('input[data-applylc]').on('change', this.toggleCheck());
	}
};

},{}]},{},[1]);
