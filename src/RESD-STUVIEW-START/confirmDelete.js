import deleteRequest from './deleteRequest';

export default function confirmDelete(button) {

	var dialog = sits_dialog(resdDialogs.DELETE.title,
			resdDialogs.DELETE.message, {
				No: confirmDeleteNoResponse
				,
				'Delete': confirmDeleteDeleteResponse,
			},false,false,false);

}

export function confirmDeleteNoResponse(dialog) {
	sits_dialog_close(dialog);
}

export function confirmDeleteDeleteResponse(dialog) {
	sits_dialog_close(dialog);
	deleteRequest($('#deleteRequest'));
}
