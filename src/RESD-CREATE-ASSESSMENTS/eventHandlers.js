import validator from './validation.js';
import saveTask from  './saveTask.js';
import check24Hours from './check24Hours';
import rowsSelected from './rowsSelected';
import toastr from 'toastr';
import validateEvidenceReason from './validateNoEvidence';

export default {
	init : function init() {
		this.addValidationOnRowChange();
		this.addContinueHandler();
		this.addIndividualRowSaveHandlers();
		this.addValidationOnEvidenceReason();
	},
	addValidationOnEvidenceReason: function addValidationOnEvidenceReason() {
		$('[data-noevidencereason]').on('change keyup', function() {
			validateEvidenceReason();
		});
	},
	//on each input change - check validation, display message on save button.
	addValidationOnRowChange: function addValidationOnRowChange() {
		$('.requestRow input:not([type="file"]), .requestRow select').on('change keyup', function() {
			var requestRow = $(this).closest('.requestRow');
			$(requestRow).find('.add').removeClass('sv-mandatory');
			var btn = $(requestRow).find('.save').first();
			var removeClasses, addClasses;
			if (validator.validateRow(requestRow)) {
				removeClasses = 'sv-btn-success sv-btn-default sv-btn-warning sv-btn-danger';
				addClasses = 'sv-btn-primary';
				btn.val('Save Changes').prop('disabled',false);
			}
			else {
				removeClasses = 'sv-btn-success sv-btn-primary sv-btn-default sv-btn-warning';
				addClasses = 'sv-btn-danger';
				btn.val('Validation Errors').prop('disabled',true);
			}
			btn.addClass(addClasses).removeClass(removeClasses);
		});
	},
	addContinueHandler: function() {
		$('input[data-continue]').on('click', null, {silent:false},this.continue);
	},
	//populate ajax input, serialize form and submit. Update message in save button
	addIndividualRowSaveHandlers: function addIndividualRowSaveHandlers() {
		var _this = this;
		$('.save').click(function (e) {
			e.preventDefault();
			var row = $(this).closest('.requestRow');

			if(validator.validateRow(row)) {
				var val24 = check24Hours(row);
				if(!val24.validate24Hours())
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
						val24.FSSTDialog(_this.rowSaveCallback);
					}
				}
			}
		});
	},
	rowSaveCallback: function rowSaveCallback (row, toastr = toastr) {
		var saveButton = $(row).find('.save');
		saveButton.removeClass('sv-btn-primary sv-btn-primary sv-btn-warning sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
		rowSaveCallbackMessager(resdErrors.taskSaved, toastr);

		rowsSelected.updateCounters();
	},
	continue : function (silent) {
		var progressClasses = 'progress progress-striped active';
		$('input[data-continue]').addClass(progressClasses);
		return validator.validatePage(silent.data.silent) ?  true : ($('input[data-continue]').removeClass(progressClasses), false);
	}
};

export function rowSaveCallbackMessager(message, toastr = require('toastr')) {
	toastr.success(message);
}
