import validator from '../shared/js/validator';
//import toastr from 'toastr';

export default {
	validateRow: function validateRow(row) {

		//collect inputs
		var dissertation = $(row).find('.dissertation option:selected').first();
		var taskType = $(row).find('.taskType option:selected').first();

		var selects = [dissertation, taskType];

		var lengthCell = $(row).find('.length').parent().parent().parent();
		if (lengthCell.css('display') === 'table-cell') {
			selects.push($(row).find('.length option:selected').first());
		}

		//validate selects
		validator.validateSelects(selects);

		//return whether row is valid
		return $(row).find('.sv-mandatory').not('.add').length === 0 ? b() : false;
	},
	validateEvidence: function validateEvidence(evidence) {
		var evidBtn = $(evidence).find('.add');
		//if(evidBtn.length === 0) return false; //checks that evidence is in DOM
		var result = $(evidBtn).parent().parent().css('display') === 'block' ? ($(evidBtn).addClass('sv-mandatory'), false) : ($(evidBtn).removeClass('sv-mandatory'), true);
		if(!result) {
			$('[data-noevidencereason]').show();
			if($('[data-noevidencereason]').val() === '') {
				$('[data-noevidencereason]').addClass('sv-mandatory');
				return false;
			}
			else {
				$('[data-noevidencereason]').removeClass('sv-mandatory');
				return true;
			}
		}
		else {
			return result;
		}
	},
	validatePage: function validatePage(silent = true, resdErrors = global.resdErrors, notifier = require('toastr')) {
		var validationErrors = this.getValidationErrors();
		if (!silent)
			validationErrors.filter((e, i) => validationErrors.indexOf(e) == i).map(a => notifier.warning(resdErrors[a]));
		return typeof (staff) != 'undefined' ? true : validationErrors.length === 0 && b();
	},
	saveButtonSavedState: function saveButtonSavedState(row) {
		var savebtn = $(row).find('.save');
		return (savebtn.is('.sv-btn-default, .sv-btn-success'));
	},
	getValidationErrors: function getValidationErrors() {
		var validationErrors = [];
		var _this = this;
		if ($('.requestRow').find('.selected:checked').length === 0) {
			validationErrors.push('NO_TASKS_SELECTED');
		}
		else {
			$('.requestRow').each(function (i, e) {
				if ($(e).find('.selected').first().prop('checked')) {
					if (!_this.validateRow(e)) {
						validationErrors.push('INVALID_SELECTION');
					}
					else {
						if (_this.saveButtonSavedState(e)) {
							if (!_this.validateEvidence(e))
								validationErrors.push('MISSING_EVIDENCE');
						}
						else {
							validationErrors.push('UNSAVED_TASK');
						}
					}
				}
				else {
					if ($(e).find('.save').hasClass('sv-btn-warning'))
						validationErrors.push('UNSAVED_TASK');
				}
			});
		}
		return validationErrors;
	}
};

