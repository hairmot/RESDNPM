(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    submitFormAsync: function submitFormAsync(done) {
        var formData = $('form').first().serialize() + '&NEXT.DUMMY.MENSYS.1=Next';
        $.post($('form').first().attr('action'), formData, function (data) {
            done();
        });
    }
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _validator = require('./validator');

var _validator2 = _interopRequireDefault(_validator);

var _ajaxFunctions = require('./ajaxFunctions.js');

var _ajaxFunctions2 = _interopRequireDefault(_ajaxFunctions);

var _rowsSelected = require('./rowsSelected.js');

var _rowsSelected2 = _interopRequireDefault(_rowsSelected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	//on each input change - check validation, display message on save button.
	addRowChangeHandlers: function addRowChangeHandlers() {
		$('.requestRow input:not([type="file"]), .requestRow select').on("change keyup", function () {
			if (_validator2.default.validateRow($(this).closest('.requestRow'))) {
				$(this).closest('.requestRow').find('.save').first().val('Save Changes').removeClass('sv-btn-success sv-btn-primary sv-btn-danger').addClass('sv-btn-warning').prop('disabled', false);
			} else {
				$(this).closest('.requestRow').find('.save').first().val('Validation Errors').removeClass('sv-btn-success sv-btn-primary sv-btn-warning').addClass('sv-btn-danger').prop('disabled', true);
			}
		});
	},

	addContinueHandler: function addContinueHandler() {
		$('input[data-continue]').on('click', function (e) {
			var rowsValidated = 0;
			var result = true;
			$('.requestRow').each(function (i, e) {
				if ($(e).find('.selected').first().prop('checked')) {
					rowsValidated++;
					if (!_validator2.default.validateRow(e)) {
						toastr.warning('One or more selections invalid. Please check your inputs');
						result = false;
					} else {
						if ($(e).find('.save').hasClass('sv-btn-primary') || $(e).find('.save').hasClass('sv-btn-success')) {} else {
							toastr.warning('One of your selections has not been saved');
							result = false;
						}
					}
				} else {
					if ($(e).find('.save').hasClass('sv-btn-warning')) {
						result = false;
						toastr.warning('One of your changes has not been saved');
					}
				}
			});

			if (rowsValidated > 0) {
				if (result) {
					return result;
				} else {
					toastr.warning('No valid tasks selected');
					return result;
				}
			} else {
				toastr.warning('No valid tasks selected');
				return false;
			};
		});
	},

	//populate ajax input, serialize form and submit. Update message in save button
	addSaveHandlers: function addSaveHandlers() {
		$('.save').click(function (e) {
			e.preventDefault();
			var _this = this;

			var toSave = $(this).closest('.requestRow');
			if (_validator2.default.validateRow(toSave)) {
				var toSaveText = [toSave.find('.mapCode').html(), toSave.find('.mabSeqn').html(), toSave.find('input[type="checkbox"]').prop('checked'), toSave.find('.taskTitle').val(), toSave.find('.dueDate').val(), toSave.find('.taskType option:selected').val(), toSave.find('.dissertation option:selected').val()];
				$('[data-ajaxinput]').text(toSaveText.join('~'));
				$(_this).prop('disabled', 'true').val('Saving...').addClass('progress-striped progress active').css('height', '34px').css('margin-bottom', 0);
				_ajaxFunctions2.default.submitFormAsync(function () {
					$(_this).removeClass('sv-btn-primary sv-btn-warning  sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
					toastr.success('Saved data');
					_rowsSelected2.default.updateRowsSelected('body', '#selectedRows');
					_rowsSelected2.default.updateSectionRowsSelected();
				});
			}
		});
	}

};

},{"./ajaxFunctions.js":1,"./rowsSelected.js":4,"./validator":6}],3:[function(require,module,exports){
'use strict';

var _shPlUpload = require('./sh-plUpload.js');

var _shPlUpload2 = _interopRequireDefault(_shPlUpload);

var _rowsSelected = require('./rowsSelected.js');

var _rowsSelected2 = _interopRequireDefault(_rowsSelected);

var _eventHandlers = require('./eventHandlers.js');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//attach handlers when js is initialised
function RESDInit() {
	_eventHandlers2.default.addRowChangeHandlers();
	_eventHandlers2.default.addSaveHandlers();
	_eventHandlers2.default.addContinueHandler();
	_shPlUpload2.default.addUploadHandlers();
	_shPlUpload2.default.addFileHandlers();
	_rowsSelected2.default.updateRowsSelected('body', '#selectedRows');
	_rowsSelected2.default.updateSectionRowsSelected();
}

sits_attach_event("window", "load", function () {
	RESDInit();
});

},{"./eventHandlers.js":2,"./rowsSelected.js":4,"./sh-plUpload.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    updateSectionRowsSelected: function updateSectionRowsSelected() {
        var _this = this;
        $('#accordion > div').each(function (i, e) {
            _this.updateRowsSelected($(e), $(e).prev().find('.sectionSelectedRows'));
        });
    },

    updateRowsSelected: function updateRowsSelected(element, outputSelector) {
        $(outputSelector).html(this.validRowsSelected(element));
    },

    validRowsSelected: function validRowsSelected(element) {
        var count = 0;
        $(element).find('.requestRow').each(function (i, e) {
            if ($(e).find('.save').hasClass('sv-btn-success') || $(e).find('.save').hasClass('sv-btn-primary')) {
                if ($(e).find('.selected').first().prop('checked')) {
                    count++;
                }
            }
        });
        return count;
    }
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    addUploadHandlers: function addUploadHandlers() {
        $('.add').on('click', function (e) {
            e.preventDefault();
            Object.keys(uploader).map(function (a) {
                return uploader[a];
            })[0].bind("UploadComplete", function () {
                $('input[data-continue]').prop('disabled', false).val('Continue');
                toastr.success('All files finished uploading');
            });
            Object.keys(uploader).map(function (a) {
                return uploader[a];
            })[0].bind("UploadFile", function () {
                $('input[data-continue]').prop('disabled', true).val('Files Uploading');
                toastr.info('Files uploading');
            });
            $(this).prev().click();
        });
    },

    addFileHandlers: function addFileHandlers() {
        $('.fileBrowse').on('change', function () {
            var pageUploader = Object.keys(uploader).map(function (a) {
                return uploader[a];
            })[0];
            pageUploader.addFile(this.files[0]);
            var id = $(this).attr('id');
            $(this).next().removeClass('sv-btn-default').addClass('sv-btn-success').val('Uploaded').prop('disabled', true);
            waitForInputs(id);
        });
    },

    waitforInputs: function waitForInputs(id) {
        if ($('.updesc').length > 0) {
            $('.updesc').val(id);
            $('.upnotes').val($('#mhdCode').html());
            Object.keys(uploader).map(function (a) {
                return uploader[a];
            })[0].start();
        } else {
            setTimeout(function () {
                waitForInputs(id);
            }, 100);
        }
    }
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    validateRow: function validateRow(row) {

        //collect inputs
        var taskTitle = $(row).find('.taskTitle').first();
        var dueDate = $(row).find('.dueDate').first();
        var dissertation = $(row).find('.dissertation option:selected').first();
        var taskType = $(row).find('.taskType option:selected').first();

        //validate input types
        this.validateInputs([taskTitle, dueDate]);
        this.validateSelects([dissertation, taskType]);

        //return whether row is valid
        return $(row).find('.sv-mandatory').length === 0 ? true : false;
    },

    validateSelects: function validateSelects(selects) {
        selects.map(function (a) {
            return a.val() == "Please select" ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory');
        });
    },

    validateInputs: function validateInputs(inputs) {
        inputs.map(function (a) {
            return a.val() == "" ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory');
        });
    }
};

},{}]},{},[3]);
