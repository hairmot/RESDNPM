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
		$('input[value="Confirm Decision"]').on('click', function() {
			submitHijack(validation);
		});
	}
};
export function submitHijack(validation) {
	validation.validatePage();
	if($('.sv-mandatory').length > 0) {
		toastr.warning(resdErrors.incompleteRows);
		return false;
	}
	else {
		if($('[data-decision] option:selected[value="3"]').length > 0) {
			toastr.warning(resdErrors.pendingDecisions);
			toastr.info(resdErrors.saveAndExitHint);
			return false;
		}
		else {
			confirmDecision();
			return false;
		}
	}
}

export function confirmDecision() {
	var dialog = sits_dialog(resdDialogs.CONFIRM.title,
		resdDialogs.CONFIRM.message, {
			Cancel: () => {
				sits_dialog_close(dialog);
			},
			Continue:() => {
				sits_dialog_close(dialog);
				$('input[value="Confirm Decision"]').off('click');
				$('input[value="Confirm Decision"]').click();
			}
		},false,false,false);
	return false;
}
