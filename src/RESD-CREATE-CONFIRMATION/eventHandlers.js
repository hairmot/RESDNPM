import validation from './validation';

export default {
	init: function init() {
		bindDeleteButton();
		bindAccept();
	}
};

function bindAccept() {
	$('[data-accept]').on('change', () => validation.nextButtonControl());
}

function bindDeleteButton() {
	$('[data-delete]').on('click', cancelSubmit);
}

function cancelSubmit() {
	confirmDeleteRequest();
	return false;
}

function confirmDeleteRequest() {
	var dialog = sits_dialog('Delete Request', // eslint-disable-line
			'Deleting this request is an irreversible action. Please click continue if you still wish to proceed.', {
				Continue:() => {
					sits_dialog_close(dialog);// eslint-disable-line
					$('[data-delete]').off('click', cancelSubmit).click();

				},
				Cancel: () => {
					sits_dialog_close(dialog);// eslint-disable-line
				}
			},false,false,false);
}// eslint-disable-line
