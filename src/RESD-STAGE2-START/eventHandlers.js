import validator from '../shared/js/validator';

export default (messager) => {
	var validationObject = {
		init: function init() {
			this.validateInputsOnChange();
			this.validateSubmit();
		},
		validateInputsOnChange: function validateInputsOnChange() {
			$('[data-stage2info]').on('change keyup blur', function() {
				validator.validateInputs([$(this)]);
			});
			$('[data-recpicker] input[type="checkbox"]').on('change keyup blur', function() {
				validator.validateRecordPicker($('[data-recpicker]'));
			});
		},
		validateSubmit: function validateSubmit() {
			$('input[value="Submit"]').on('click', function(e) {
				validator.validateInputs([$('[data-stage2info]')]);
				validator.validateRecordPicker($('[data-recpicker]'));
				if($('.sv-mandatory').length > 0) {
					messager.warning('Please provide require inputs');
					return false;
				}
				return true;
			});
		}
	}
	return validationObject;
}
