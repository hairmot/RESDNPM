import validator from '../shared/js/validator';
import toastr from 'toastr';
import * as v from './validationStates';

export default {
	validateRow: function validateRow(row) {

        //collect inputs
		var dissertation = $(row).find('.dissertation option:selected').first();
		var taskType = $(row).find('.taskType option:selected').first();

		var selects = [dissertation, taskType];

		var lengthCell = $(row).find('.length').parent();
		if(lengthCell.css('display') === 'table-cell')
		{
			selects.push($(row).find('.length option:selected').first());
		}

        //validate selects
		validator.validateSelects(selects);

        //return whether row is valid
		return $(row).find('.sv-mandatory').not('.add').length === 0 ? true : false;
	},
	validateEvidence : function validateEvidence(evidence) {
		var evidBtn = $(evidence).find('.add');
		return $(evidBtn).parent().parent().css('display') === 'block' ? ($(evidBtn).addClass('sv-mandatory'),false) : ($(evidBtn).removeClass('sv-mandatory'), true);
	},
	validatePage: function validatePage(silent) {
		var validationErrors = [];
		var _this = this;
		if($('.requestRow').find('.selected:checked').length === 0) {
			validationErrors.push(v.NO_TASKS_SELECTED);
		}
		else {
			$('.requestRow').each(function(i,e) {
				if($(e).find('.selected').first().prop('checked')) {
					if(!_this.validateRow(e)) {
						validationErrors.push(v.INVALID_SELECTION);
					}
					else {
						if($(e).find('.save').hasClass('sv-btn-default') || $(e).find('.save').hasClass('sv-btn-success')) {
							if (!_this.validateEvidence(e))
								validationErrors.push(v.MISSING_EVIDENCE);
						}
						else {
							validationErrors.push(v.UNSAVED_TASK);
						}
					}
				}
				else {
					if($(e).find('.save').hasClass('sv-btn-warning'))
						validationErrors.push(v.UNSAVED_TASK);
				}
			});
		}

		if(!silent)
			validationErrors.map(a => statusDisplay(a));
		return validationErrors.length === 0 ? true: false;
	}
};


function statusDisplay(result) {
	switch(result) {
	case v.VALID:
		toastr.success('Success');
		break;
	case v.INVALID_SELECTION:
		toastr.warning('Invalid Rows Selected');
		break;
	case v.MISSING_EVIDENCE:
		toastr.warning('Please provide supporting evidence');
		break;
	case v.NO_TASKS_SELECTED:
		toastr.warning('Please select tasks to include in your request');
		break;
	case v.UNSAVED_TASK:
		toastr.warning('Unsaved Tasks. Please store your changes or deselect unsaved tasks');
		break;
	default:
		toastr.warning('Invalid selection');
		break;
	}
}
