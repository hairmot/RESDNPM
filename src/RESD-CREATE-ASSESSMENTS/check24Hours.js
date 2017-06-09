import saveTask from './saveTask';
import formatDate from '../shared/js/formatDate';
import messager from 'toastr';

var row;
var callback;

export default function(curRow) {
	row = curRow;
	return {
		validate24Hours: function validate24Hours() {
			var result = false;
			var dueDate = row.find('.dueDate').first().html();
			var selected = row.find('.selected').first();
			if(dueDate === formatDate(new Date()) && selected.prop('checked'))
			{
				result = true;
			}
			return result;
		},
		FSSTDialog: function FSSTDialog(curCallback) {
			callback = curCallback;
			var dialog = sits_dialog(resdDialogs.DUEIN24HOURS.title,
				resdDialogs.DUEIN24HOURS.message, {
					No: fsstDialogNoResponse,
					Yes: fsstDialogYesResponse
				},false,false,false);
		}
	}
};

function staffNamePrompt(row, callback) {
	var result = false;
	var dialog = sits_dialog(resdDialogs.NAMEOFSTAFF.title,
		resdDialogs.NAMEOFSTAFF.message + `:
		<br/><br/>
		<input id="fsstInput" class="sv-form-control" type="text" />`, {
			'Exit': staffNamePromptExit,

			'Save': staffNamePromptSave
		},false,false,false);
	return result;
}

export function staffNamePromptExit() {
	$(row).find('.selected').first().prop('checked', false);
	sits_dialog_close();
	confirmCloseDialog();
}

export function staffNamePromptSave(messager) {
	if(transferFsstName(messager))
	{
		sits_dialog_close();
		return saveTask(row, callback);
	}
	else {
		return false;
	}
}

export function fsstDialogNoResponse() {
	row.find('.selected').first().prop('checked', false);
	sits_dialog_close();
	confirmCloseDialog();
}

export function fsstDialogYesResponse() {
	sits_dialog_close();
	staffNamePrompt(row, callback);
	return true;
}

function confirmCloseDialog() {
	var dialog = sits_dialog(resdDialogs.QUIT24HRCHECK.title,
			resdDialogs.QUIT24HRCHECK.message, {
				Close:sits_dialog_close
			},false,false,false);
}

function transferFsstName(messager){

	var inputval = $('#fsstInput').val();
	if(inputval !== '')
	{
		$('[data-fsstname]').first().val(inputval);
		return true;
	}
	else
	{
		messager.warning(resdErrors.enterName);
		return false;
	}
}
