import validation from './validation';

export default {
    init: function init() {
        bindDeleteButton();
        bindAccept();
    }
}

function bindAccept() {
    $('[data-accept]').on('change', () => validation.nextButtonControl());
}

function bindDeleteButton() {
    $('[data-delete]').on('click', cancelSubmit);
}

function cancelSubmit(e) {   
        confirmDeleteRequest();     
        return false;
}

function confirmDeleteRequest() {
	var dialog = sits_dialog("Delete Request", 
			`Deleting this request is an irreversible action. Please click continue if you still wish to proceed.`, {
		    Continue:() => {
				sits_dialog_close(dialog);
                 $('[data-delete]').off('click', cancelSubmit).click();
                 
			},
            Cancel: () => {
                sits_dialog_close(dialog);
            }
		},false,false,false);
}