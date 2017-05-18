import deleteRequest from './deleteRequest';

export default function confirmDelete(button) {

	var dialog = sits_dialog(resdDialogs.DELETE.title,// eslint-disable-line
			resdDialogs.DELETE.message, {
				No:() => {
					sits_dialog_close(dialog);// eslint-disable-line
				},
				'Delete':() => {
					sits_dialog_close(dialog);// eslint-disable-line
					deleteRequest(button);
				},
			},false,false,false);

}
