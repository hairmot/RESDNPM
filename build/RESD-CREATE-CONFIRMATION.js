(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _validation = require('./validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	init: function init() {
		bindDeleteButton();
		bindAccept();
	}
};


function bindAccept() {
	$('[data-accept]').on('change', function () {
		return _validation2.default.nextButtonControl();
	});
}

function bindDeleteButton() {
	$('[data-delete]').on('click', cancelSubmit);
}

function cancelSubmit() {
	confirmDeleteRequest();
	return false;
}

function confirmDeleteRequest() {
	var dialog = sits_dialog('Delete Request', // eslint-disable-line
	'Deleting this request is an irreversible action. Please click continue if you still wish to proceed.', {
		Continue: function Continue() {
			sits_dialog_close(dialog); // eslint-disable-line
			$('[data-delete]').off('click', cancelSubmit).click();
		},
		Cancel: function Cancel() {
			sits_dialog_close(dialog); // eslint-disable-line
		}
	}, false, false, false);
} // eslint-disable-line

},{"./validation":3}],2:[function(require,module,exports){
'use strict';

var _eventHandlers = require('./eventHandlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _validation = require('./validation');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RESDInit() {
	_eventHandlers2.default.init();
	_validation2.default.nextButtonControl();
}

sits_attach_event('window', 'load', function () {
	// eslint-disable-line
	RESDInit();
});

},{"./eventHandlers":1,"./validation":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	nextButtonControl: function nextButtonControl() {
		$('input[value="Submit Request"]').prop('disabled', !this.validatePage());
	},

	validatePage: function validatePage() {
		$('.requestRow').length === 0 ? $('input[value="Submit Request"]').val('No Tasks Selected') : $('input[value="Submit Request"]').val('Submit Request');
		return $('[data-accept]').prop('checked') && $('.requestRow').length > 0;
	}
};

},{}]},{},[2]);
