import validator from './validation.js';
import saveTask from  './saveTask.js';
import rowsSelected from './rowsSelected.js';
import check24Hours from './check24Hours';
import toastr from 'toastr';

export default {
//on each input change - check validation, display message on save button.
	addValidationOnRowChange: function addValidationOnRowChange() {
		$('.requestRow input:not([type="file"]), .requestRow select').on('change keyup', function() {
			var requestRow = $(this).closest('.requestRow');
			$(requestRow).find('.add').removeClass('sv-mandatory');
			if (validator.validateRow(requestRow)) {
				$(requestRow).find('.save').first().val('Save Changes').removeClass('sv-btn-success sv-btn-default sv-btn-primary sv-btn-danger').addClass('sv-btn-warning').prop('disabled',false);
			}
			else {
				$(requestRow).find('.save').first().val('Validation Errors').removeClass('sv-btn-success sv-btn-primary sv-btn-default sv-btn-warning').addClass('sv-btn-danger').prop('disabled',true);
			}
			//$('[data-continue]').prop('disabled', !validator.validatePage(true));
		});
	},


	addContinueHandler: function addContinueHandler() {
		$('input[data-continue]').on('click', function (){
			return validator.validatePage(false);
		});
	},

	//populate ajax input, serialize form and submit. Update message in save button
	addIndividualRowSaveHandlers: function addIndividualRowSaveHandlers() {
		$('.save').click(function (e) {
			e.preventDefault();
			var toSave = $(this).closest('.requestRow');

			var saveCallback = function() {
				var saveButton = $(toSave).find('.save');
				saveButton.removeClass('sv-btn-primary sv-btn-warning sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
				toastr.success(resdErrors.taskSaved);
				rowsSelected.updateCounters();
			}

			if(validator.validateRow(toSave)) {
				if(!check24Hours.validate24Hours(toSave))
				{
					saveTask(toSave, saveCallback);
				}
				else
				{
					if($('[data-fsstname]').first().val() !== '')
					{
						saveTask(toSave, saveCallback);
					}
					else
					{
						check24Hours.FSSTDialog(toSave, saveCallback);
					}
				}
			}
		});
	}
};
