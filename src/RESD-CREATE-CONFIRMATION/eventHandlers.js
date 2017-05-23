import validation from './validation';

export default {
	init: function init() {
		bindDeleteButton();
		bindSubmitButton();
	}
};

function bindSubmitButton() {
	$('input[value="Submit Request"]').on('click', function() {
		return validation.validatePage().length === 0;
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
