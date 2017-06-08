import validator from '../shared/js/validator';
import plUploader from '../shared/js/getPlUploader';

export default {
	validatePage: function validatePage() {
		return typeof(staff) != 'undefined' ? true : (this.validatePageInputs() && this.validateEvidence());
	},
	validatePageInputs: function validate() {
		var circumstancesCategory = $('body').find('[data-resdreason] option:selected').first();
		validator.validateSelects([circumstancesCategory]);

		var summaryText = $('textarea[data-remchar]').first();
		var evidenceReason = $('input[data-evidencereason]:visible').first();
		validator.validateInputs([summaryText, evidenceReason]);
		return $('.sv-mandatory:visible').length === 0;
	}
    ,
	validateEvidence: function validateEvidence() {
		if($('input[data-evidenceavailable]').prop('checked'))
        {
			return true;
		}
		else
        {
			return this.filesUploaded();
		}
	},
	filesUploaded: function filesUploaded() {
		var files = $('.sv-plupfile').length;
		return (files > 0);
	},
	setNextButtonState : function setNextButtonState(){
		var valid = this.validatePage();
		if(valid && plUploader().state === 1){
			$('input[value="Next"]').prop('disabled', false);
			return true;
		}
		else {
			$('input[value="Next"]').prop('disabled', true);
			return false;
		}
	}

};
