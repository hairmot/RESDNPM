(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return Object.keys(uploader).map(function (a) {
        return uploader[a];
    })[0];
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    validateSelects: function validateSelects(selects) {
        selects.map(function (a) {
            return a.text() == "Please select" ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory');
        });
    },

    validateInputs: function validateInputs(inputs) {
        inputs.map(function (a) {
            return a.val() == "" ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory');
        });
    }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = require('./validation.js');

var _validation2 = _interopRequireDefault(_validation);

var _getPlUploader = require('../shared/getPlUploader.js');

var _getPlUploader2 = _interopRequireDefault(_getPlUploader);

var _evidenceMode = require('./evidenceMode.js');

var _evidenceMode2 = _interopRequireDefault(_evidenceMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addChangeHandlers: function addInputChangeHandlers() {

        $('input, select, textarea').on('keyup change', function () {
            _validation2.default.validatePage();
        });

        $('input[data-evidenceavailable]').on('change', function () {
            (0, _evidenceMode2.default)();
        });

        $('input[title="Next"]').on('click', function () {

            if (_validation2.default.validatePage() === 0 && _validation2.default.validateEvidence()) {
                toastr.success('Page Valid!');
                return true;
            } else {
                toastr.warning('required inputs are invalid');
            }
            return false;
        });
    }

};

},{"../shared/getPlUploader.js":1,"./evidenceMode.js":4,"./validation.js":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if ($('input[data-evidenceavailable]').prop('checked')) {
        $('.evidenceReason').css('display', 'inherit');
        $('input[data-evidencereason]').prop('disabled', false).addClass('sv-mandatory');
    } else {
        $('.evidenceReason').css('display', 'none');
        $('input[data-evidencereason]').prop('disabled', true).val('').removeClass('sv-mandatory');
    }
};

},{}],5:[function(require,module,exports){
'use strict';

var _eventHandlers = require('./eventHandlers.js');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _evidenceMode = require('./evidenceMode.js');

var _evidenceMode2 = _interopRequireDefault(_evidenceMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RESDInit() {
    //bind all event handlers
    Object.keys(_eventHandlers2.default).map(function (a) {
        return _eventHandlers2.default[a]();
    });
    (0, _evidenceMode2.default)();
}

sits_attach_event("window", "load", function () {
    RESDInit();
});

},{"./eventHandlers.js":3,"./evidenceMode.js":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = require('../shared/validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validatePage: function validate() {
        var circumstancesCategory = $('body').find('.circumstancesCategory select option:selected').first();
        _validator2.default.validateSelects([circumstancesCategory]);

        var summaryText = $('textarea[data-remchar]').first();
        var evidenceReason = $('input[data-evidencereason]:visible').first();
        _validator2.default.validateInputs([summaryText, evidenceReason]);

        return $('.sv-mandatory').length;
    },

    validateEvidence: function validateEvidence() {
        if ($('input[data-evidenceavailable]').prop('checked')) {
            return true;
        } else {
            var files = $('.sv-plupfile').length;
            if (files > 0) {
                return true;
            } else {
                toastr.warning('You need to upload evidence');
                return false;
            }
        }
    }

};

},{"../shared/validator":2}]},{},[5]);
