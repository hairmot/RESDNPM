import toastr from 'toastr';
import saveTask from './saveTask';

export default {
	validate24Hours: function validate24Hours(row) {
		var result = false;
		var dueDate = row.find('.dueDate').first().html();
		var selected = row.find('.selected').first();
		if(dueDate === formatDate(new Date()) && selected.prop('checked'))
		{
			result = true;
		}
		return result;
	},
	FSSTDialog: function FSSTDialog(row, callback) {
		var dialog = sits_dialog(resdDialogs.DUEIN24HOURS.title,
			resdDialogs.DUEIN24HOURS.message, {
				No:() => {
					fsstDialogNoResponse(dialog, row);
				},
				Yes: () => {
					fsstDialogYesResponse(dialog, row, callback);
				//go to next dialog
				}
			},false,false,false);
	}
};

function staffNamePrompt(row, callback) {
	var result = false;
	var dialog = sits_dialog(resdDialogs.NAMEOFSTAFF.title,
		resdDialogs.NAMEOFSTAFF.message + `:
		<br/><br/>
		<input id="fsstInput" class="sv-form-control" type="text" />`, {
			'Exit': () => { staffNamePromptExit(dialog, row);},

			'Save': () => {staffNamePromptSave(dialog, row, callback);}
		},false,false,false);
	return result;
}

export function staffNamePromptExit(dialog, row) {
	$(row).find('.selected').first().prop('checked', false);
	sits_dialog_close(dialog);
	confirmCloseDialog();
}

export function staffNamePromptSave(dialog, row, callback) {
	if(transferFsstName())
	{
		sits_dialog_close(dialog);
		return saveTask(row, callback);
	}
}

export function fsstDialogNoResponse(dialog, row) {
	row.find('.selected').first().prop('checked', false);
	sits_dialog_close(dialog);
	confirmCloseDialog();
}

export function fsstDialogYesResponse(dialog, row, callback) {
	sits_dialog_close(dialog);
	staffNamePrompt(row, callback);
	return true;
}

function confirmCloseDialog() {
	var dialog = sits_dialog(resdDialogs.QUIT24HRCHECK.title,
			resdDialogs.QUIT24HRCHECK.message, {
				Close:() => {
					sits_dialog_close(dialog);
				},
			},false,false,false);
}

function formatDate(date) {
	var monthNames = [
		'January', 'February', 'March',
		'April', 'May', 'June', 'July',
		'August', 'September', 'October',
		'November', 'December'
	];

	var day = ('0' + date.getDate()).slice(-2);
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return day + '/' + monthNames[monthIndex] + '/' + year;
}

function transferFsstName(){

	var inputval = $('#fsstInput').val();
	if(inputval !== '')
	{
		$('[data-fsstname]').first().val(inputval);
		return true;
	}
	else
	{
		toastr.warning(resdErrors.enterName);
		return false;
	}
}
