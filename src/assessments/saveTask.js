import toastr from 'toastr';
import rowsSelected from './rowsSelected.js';
import submitFormAsync from '../shared/js/submitFormAsync';

export default function saveTask(toSave) {
	toSave.find('[data-ajaxinput]').each(function(i,e) {
		populateAjaxField(e);
	});		
	var saveButton = $(toSave).find('.save');
	saveButton.prop('disabled','true').val('Saving...').addClass('progress-striped progress active');
	if(enhanced === "Y")
	{
		submitFormAsync(function() {
			saveButton.removeClass('sv-btn-primary sv-btn-warning sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
			toastr.success('Saved data');
			rowsSelected.updateCounters();		
		});		
	}	
	else
	{
		$('[data-accordion]').val($('#accordion').accordion("option").active);
		$('#ajaxSubmit input[type="submit"]').first().click();
	}
}

function populateAjaxField(name) {
	var inputName = $(name).data('ajaxinput');
	var nodeName = $(name).prop('tagName');
	$('[data-' + inputName + ']').val(getFieldValue(name, nodeName));
}

function getFieldValue(field, type) {
	switch(type) {
		case "TD":
			return $(field).html();
			break;
		case "INPUT":
			return $(field).prop('checked') === true ? "Y" : "N";
			break;
		case "SELECT":
			return $(field).find("option:selected").val();
			break;
		default:
			return ;
	}
}


