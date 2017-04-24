(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    validateSelects: function validateSelects(selects) {
        selects.map(function (a) {
            return a.val() == 0 ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory');
        });
    },

    validateInputs: function validateInputs(inputs) {
        inputs.map(function (a) {
            return a.val() == "" ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory');
        });
    }
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = require('./validation.js');

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addChangedHandlers: function addChangedHandlers() {
        $('input, select, textarea').on('keyup change', function () {
            _validation2.default.validate();
        });

        $('input[data-evidenceavailable]').on('change', function () {
            if ($(this).prop('checked')) {
                $('.evidenceReason').css('display', 'inherit');
                $('input[data-evidencereason]').prop('disabled', false).addClass('sv-mandatory');
            } else {
                $('.evidenceReason').css('display', 'none');
                $('input[data-evidencereason]').prop('disabled', true).val('').removeClass('sv-mandatory');
            }
        });
    }

};

},{"./validation.js":4}],3:[function(require,module,exports){
"use strict";

var _eventHandlers = require("./eventHandlers.js");

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RESDInit() {
  _eventHandlers2.default.addChangedHandlers();
}

sits_attach_event("window", "load", function () {
  RESDInit();
});

},{"./eventHandlers.js":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = require('../shared/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validate: function validate() {
        var circumstancesCategory = $('body').find('.circumstancesCategory select option:selected').first();
        _validator2.default.validateSelects([circumstancesCategory]);

        var summaryText = $('textarea[data-remchar]').first();
        _validator2.default.validateInputs([summaryText]);
    }
};

},{"../shared/validator":1}]},{},[3]);
