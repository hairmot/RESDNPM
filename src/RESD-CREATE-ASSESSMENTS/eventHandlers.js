import validator from './validation.js';
import saveTask from  './saveTask.js';
import check24Hours from './check24Hours';
import rowsSelected from './rowsSelected';

export default {
	init : function init() {
		this.addValidationOnRowChange();
		this.addContinueHandler();
		this.addIndividualRowSaveHandlers();
	},
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
		});
	},


	addContinueHandler: function() {
		$('input[data-continue]').on('click', this.continue);
	},
	//populate ajax input, serialize form and submit. Update message in save button
	addIndividualRowSaveHandlers: function addIndividualRowSaveHandlers() {
		var _this = this;
		$('.save').click(function (e) {
			e.preventDefault();
			var row = $(this).closest('.requestRow');

			if(validator.validateRow(row)) {
				if(!check24Hours.validate24Hours(row))
				{
					saveTask(row, _this.rowSaveCallback);
				}
				else
				{
					if($('[data-fsstname]').first().val() !== '')
					{
						saveTask(row, _this.rowSaveCallback);
					}
					else
					{
						check24Hours.FSSTDialog(row, _this.rowSaveCallback);
					}
				}
			}
		});
	},
	rowSaveCallback: function rowSaveCallback (row, toastr = require('toastr')) {
		var saveButton = $(row).find('.save');
		saveButton.removeClass('sv-btn-primary sv-btn-warning sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
		toastr.success(resdErrors.taskSaved);
		rowsSelected.updateCounters();
	},
	continue : function () {
		return validator.validatePage(false);
	}
};



