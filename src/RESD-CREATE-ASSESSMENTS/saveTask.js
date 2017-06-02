import submitFormAsync from '../shared/js/submitFormAsync';

export default function saveTask(toSave, callback) {
	toSave.find('[data-ajaxinput]').each(function(i,e) {
		populateAjaxField(e);
	});
	var saveButton = $(toSave).find('.save');
	saveButton.prop('disabled','true').val('Saving...').addClass('progress-striped progress active');
	if(enhanced === 'Y')
	{
		submitFormAsync(callback, toSave);
	}
	else
	{
		$('#ajaxSubmit input[type="submit"]').first().click();
	}
	return true;
}

function populateAjaxField(name) {
	var inputName = $(name).data('ajaxinput');
	var nodeName = $(name).prop('tagName');
	$('[data-' + inputName + ']').val(getFieldValue(name, nodeName));
}

function getFieldValue(field, type) {
	switch(type) {
	case 'TD':
		return $(field).html();
	case 'SELECT':
		return $(field).find('option:selected').val();
	default:
		return $(field).prop('checked') === true ? 'Y' : 'N';
	}
}


