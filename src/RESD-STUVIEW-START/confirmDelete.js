import deleteRequest from './deleteRequest';

export default function confirmDelete(button) {

	var dialog = sits_dialog('Delete Request',// eslint-disable-line
			'Once this task has been deleted, it cannot be recovered. Are you sure you wish to continue?', {
				No:() => {
					sits_dialog_close(dialog);// eslint-disable-line
				},
				'Delete Request':() => {
					sits_dialog_close(dialog);// eslint-disable-line
					deleteRequest(button);
				},
			},false,false,false);

}
