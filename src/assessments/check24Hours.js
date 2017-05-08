import toastr from 'toastr';
import saveTask from './saveTask';

export default { 
        validate24Hours: function validate24Hours(row) {
        var result = false;
        var dueDate = row.find('.dueDate').first().html();
        var selected = row.find('.selected').first();
        if(dueDate === formatDate(new Date()) && selected.prop("checked"))
        {
            result = true;
        }
        return result;        
    },
    FSSTDialog: function FSSTDialog(row) {
        var result = false;
        var dialog = sits_dialog("Task due within 24 hours", 
            `Please note: this task is due within 24 hours. 
            You must have spoken to a member of Faculty Student Services before your request can be submitted. 
            Have you spoken to a member of staff?`, {
            Yes: () => {
                sits_dialog_close(dialog);
                result = staffNamePrompt(row);
                //go to next dialog
            },
            No:() => {
                //de-select row
                row.find('.selected').first().prop("checked", false);
                sits_dialog_close(dialog);
                confirmCloseDialog();
                result = false;
            },
        },false,false,false);
    }
}

function staffNamePrompt(row) {
    var result = false;
    var dialog = sits_dialog("Name of staff", 
        `Please enter the name of the member of staff that you spoke to:
        <br/><br/>
        <input id="fsstInput" class="sv-form-control" type="text" />`, {
        Save:() => {
            if(transferFsstName())
            {                
                sits_dialog_close(dialog);
                saveTask(row);
                result = true;
            }
        },
        Exit: () => {
            result = false;
            $(row).find('.selected').first().prop("checked", false);
            sits_dialog_close(dialog);
            confirmCloseDialog();
        }
    },false,false,false);
    return result;
}

function confirmCloseDialog() {
	var dialog = sits_dialog("Task invalid", 
			`The task cannot be included in your request and will now be deselected. 
			If you would like to request an extension for this task please contact Faculty Student Services`, {
			Close:() => {
				sits_dialog_close(dialog);
			},
		},false,false,false);
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = ("0" + date.getDate()).slice(-2);
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + '/' + monthNames[monthIndex] + '/' + year;
}

function transferFsstName(){
    var inputval = $('#fsstInput').val();
    if(inputval !== "")
    {
        $('[data-fsstname]').first().val(inputval);
        return true;
    }
    else
    {
        toastr.warning('Please enter a name');
        return false;
    }
}