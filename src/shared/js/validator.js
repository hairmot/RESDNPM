import '../css/validator.css';

export default {
	validateSelects: function validateSelects(selects) {
		selects.map(a => a.val() == '' ? a.parent().addClass('sv-mandatory') : a.parent().removeClass('sv-mandatory'));
	},

	validateInputs: function validateInputs(inputs) {
		inputs.map(a => a.val().replace(/\s/g,'') == '' ? a.addClass('sv-mandatory') : a.removeClass('sv-mandatory'));
	},
	validateRecordPicker: function validateInputs(recpicker) {
		$(recpicker).find('input[type="checkbox"]:checked').length === 0 ? $(recpicker).find('.sv-checkbox label').addClass('sv-mandatory') :
		$(recpicker).find('.sv-checkbox label').removeClass('sv-mandatory')
	}
};
