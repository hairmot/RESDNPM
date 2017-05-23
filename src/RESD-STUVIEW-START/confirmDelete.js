import deleteRequest from './deleteRequest';

export default function confirmDelete(button) {

	var dialog = sits_dialog(resdDialogs.DELETE.title,
			resdDialogs.DELETE.message, {
				No:() => {
					sits_dialog_close(dialog);
				},
				'Delete':() => {
					sits_dialog_close(dialog);
					deleteRequest(button);
				},
			},false,false,false);

}
