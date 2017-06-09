import validation from './validation';
import toastr from 'toastr';

export default {
	init: function init() {
		bindDeleteButton();
		bindSubmitButton();
	}
};

function bindSubmitButton() {
	$('input[value="Submit Request"]').on('click', function() {
		var progressClasses = 'progress progress-striped active';
		$('input[value="Submit Request"]').addClass(progressClasses);
		return validation(toastr).length === 0 ?  true : ($('input[value="Submit Request"]').removeClass(progressClasses), false);
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
	var dialog = sits_dialog(resdDialogs.DELETEREQUEST.title,
			resdDialogs.DELETEREQUEST.message, {
				Cancel: () => {
					sits_dialog_close(dialog);
				},
				Continue:() => {
					sits_dialog_close(dialog);
					$('[data-delete]').off('click', cancelSubmit).click();

				}
			},false,false,false);
}
