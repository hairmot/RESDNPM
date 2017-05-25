import deleteRequest from './deleteRequest';

export default function confirmDelete() {

	sits_dialog(resdDialogs.DELETE.title,
			resdDialogs.DELETE.message, {
				No: confirmDeleteNoResponse
				,
				'Delete': confirmDeleteDeleteResponse,
			},false,false,false);

}

export function confirmDeleteNoResponse(dialog) {
	global.sits_dialog_close(dialog);
}

export function confirmDeleteDeleteResponse(dialog) {
	global.sits_dialog_close(dialog);
	deleteRequest($('#deleteRequest'));
}
