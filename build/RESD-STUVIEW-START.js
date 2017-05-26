(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = confirmDelete;
exports.confirmDeleteNoResponse = confirmDeleteNoResponse;
exports.confirmDeleteDeleteResponse = confirmDeleteDeleteResponse;

var _deleteRequest = require('./deleteRequest');

var _deleteRequest2 = _interopRequireDefault(_deleteRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirmDelete() {

	sits_dialog(resdDialogs.DELETE.title, resdDialogs.DELETE.message, {
		No: confirmDeleteNoResponse,

		'Delete': confirmDeleteDeleteResponse
	}, false, false, false);
}

function confirmDeleteNoResponse(dialog) {
	sits_dialog_close(dialog);
}

function confirmDeleteDeleteResponse(dialog) {
	sits_dialog_close(dialog);
	(0, _deleteRequest2.default)($('#deleteRequest'));
}

},{"./deleteRequest":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = deleteRequest;

var _ajaxButton = require('../shared/js/ajaxButton');

var _ajaxButton2 = _interopRequireDefault(_ajaxButton);

var _refreshData = require('./refreshData');

var _refreshData2 = _interopRequireDefault(_refreshData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteRequest(button) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _refreshData2.default;

	$(button).prop('disabled', true).addClass('progress-striped progress active');
	(0, _ajaxButton2.default)(button, function () {
		if (typeof callback == 'function') callback();
	});
}

},{"../shared/js/ajaxButton":8,"./refreshData":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _confirmDelete = require('./confirmDelete');

var _confirmDelete2 = _interopRequireDefault(_confirmDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	deleteButtonClicked: function deleteButtonClicked() {
		$('body').on('click', '[data-delete]', function (e) {
			e.preventDefault();
			(0, _confirmDelete2.default)($(this));
			return false;
		});
	}
};

},{"./confirmDelete":2}],5:[function(require,module,exports){
'use strict';

var _eventHandlers = require('./eventHandlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

require('../shared/css/fancyLoadingButton.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RESDInit() {
	_eventHandlers2.default.deleteButtonClicked();
}

sits_attach_event('window', 'load', function () {
	RESDInit();
});

},{"../shared/css/fancyLoadingButton.css":7,"./eventHandlers":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = refreshData;
function refreshData() {
	$.get($('#openRequestsAjax').attr('href'), function (rows) {
		if (rows.indexOf('requestRow') === -1) {
			$('#newRequest').show();
			$('#openRequests').hide();
		} else {
			$('#newRequest').hide();
			$('#openRequests tbody').html(rows);
			$('#openRequests').fadeIn();
		}
	});
}

},{}],7:[function(require,module,exports){
var css = ".button-secondary:active,.button:active,button:active,input[type=submit]:active{box-shadow:1px 1px 4px rgba(0,0,0,.4) inset}.button.is-disabled,.button[disabled],.is-disabled.button-secondary,[disabled].button-secondary,button.is-disabled,button[disabled],input[type=submit].is-disabled,input[type=submit][disabled]{opacity:.8;cursor:not-allowed;color:#FFF;text-shadow:0 1px 1px #aaa}.button.is-disabled:focus,.button.is-disabled:hover,.button[disabled]:focus,.button[disabled]:hover,.is-disabled.button-secondary:focus,.is-disabled.button-secondary:hover,[disabled].button-secondary:focus,[disabled].button-secondary:hover,button.is-disabled:focus,button.is-disabled:hover,button[disabled]:focus,button[disabled]:hover,input[type=submit].is-disabled:focus,input[type=submit].is-disabled:hover,input[type=submit][disabled]:focus,input[type=submit][disabled]:hover{box-shadow:none}.button,.button-secondary,button,input[type=submit]{border-radius:5px;display:inline-block;outline:0;text-align:center;-webkit-transition:.1s background-color;-moz-transition:.1s background-color;-o-transition:.1s background-color;transition:.1s background-color}.progress-striped{background-color:#149bdf;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,.15)),color-stop(0.75,rgba(255,255,255,.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}.progress.active{-webkit-animation:progress-bar-stripes 2s linear infinite;-moz-animation:progress-bar-stripes 2s linear infinite;-ms-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-moz-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-ms-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{min-height:34px;margin-bottom:0}"; (require("browserify-css").createStyle(css, { "href": "src\\shared\\css\\fancyLoadingButton.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":1}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ajaxButton;
function ajaxButton(selector, callback) {
	var url = $(selector).attr('href');
	$.get(url, function () {
		callback();
	});
}

},{}]},{},[5]);
