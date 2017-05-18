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
	FSSTDialog: function FSSTDialog(row) {
		var dialog = sits_dialog(resdDialogs.DUEIN24HOURS.title, // eslint-disable-line
			resdDialogs.DUEIN24HOURS.message, {
				Yes: () => {
					sits_dialog_close(dialog);// eslint-disable-line
					staffNamePrompt(row);
				//go to next dialog
				},
				No:() => {
				//de-select row
					row.find('.selected').first().prop('checked', false);
					sits_dialog_close(dialog);// eslint-disable-line
					confirmCloseDialog();
				},
			},false,false,false);
	}
};

function staffNamePrompt(row) {
	var result = false;
	var dialog = sits_dialog(resdDialogs.NAMEOFSTAFF.title, // eslint-disable-line
		resdDialogs.NAMEOFSTAFF.message + `:
		<br/><br/>
		<input id="fsstInput" class="sv-form-control" type="text" />`, {
			Exit: () => {
				result = false;
				$(row).find('.selected').first().prop('checked', false);
				sits_dialog_close(dialog);// eslint-disable-line
				confirmCloseDialog();
			},
			Save:() => {
				if(transferFsstName())
			{
					sits_dialog_close(dialog);// eslint-disable-line
					saveTask(row);
					result = true;
				}
			}

		},false,false,false);// eslint-disable-line
	return result;
}

function confirmCloseDialog() {
	var dialog = sits_dialog(resdDialogs.QUIT24HRCHECK.title,// eslint-disable-line
			resdDialogs.QUIT24HRCHECK.message, {
				Close:() => {
					sits_dialog_close(dialog);// eslint-disable-line
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
