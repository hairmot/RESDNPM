import validation from './validation';
import toastr from 'toastr';
import saveRow from './saveRow';

export default {
	validateOnChange: function validateOnChange() {
		$('input, select').on('change keyup', function() {
			var row = $(this).closest('tr').hasClass('requestRow') ?  $(this).closest('tr'): $(this).closest('tr').prev();

			if(validation.validateRow(row)) {
				saveRow(row);
			}
		});
	},
	pageSubmit : function pageSubmit() {
		$('input[value="Confirm Decision"]').on('click', submitHijack);
	}
};

function submitHijack() {
	validation.validatePage();
	if($('.sv-mandatory').length > 0) {
		toastr.warning('You have unfinished rows');
		return false;
	}
	else {
		if($('[data-decision] option:selected[value="3"]').length > 0) {
			toastr.warning('There are still pending decisions. Please confirm outcomes before submitting.');
			toastr.info('Please select save and exit to save your progress');
			return false;
		}
		else {
			confirmDecision();
			return false;
		}
	}
}

function confirmDecision() {
	var dialog = sits_dialog('Are you sure you want to continue?',// eslint-disable-line
		'The student will be notified immediately', {
			Cancel: () => {
				sits_dialog_close(dialog);// eslint-disable-line
			},
			Continue:() => {
				sits_dialog_close(dialog);// eslint-disable-line
				$('input[value="Confirm Decision"]').off('click', submitHijack);
				$('input[value="Confirm Decision"]').click();
			}
		},false,false,false);// eslint-disable-line
	return false;
}
