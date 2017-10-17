import validation from './validation.js';
import getPlUploader from '../shared/js/getPlUploader.js';
import evidenceMode from './evidenceMode.js';
import toastr from 'toastr';

var uploaders = 0;

export default {


	addChangeHandlers : function addInputChangeHandlers() {


		$('input, select, textarea').on('keyup change', function() {
			validation.setNextButtonState();
		});

		$('input[data-evidenceavailable]').on('change', function() {
			evidenceMode();
			validation.setNextButtonState();
		});

		$('input[title="Next"]').on('click', function(e) {
			var progressClasses = 'progress progress-striped active';
			$('input[title="Next"]').addClass(progressClasses);
			if(validation.validatePage()) {

				return true;
			}
			else {
				toastr.warning(resdErrors.missingInputs);
				$('input[title="Next"]').removeClass(progressClasses);
				return false;
			}
		});

		$('body').on('click', () => {
			if(uploaders === 0) {
				getPlUploader().bind('UploadComplete', function() {
					$('[data-evidencereason]').removeClass('.sv-mandatory');
					validation.setNextButtonState();

				});
				getPlUploader().bind('FilesRemoved', function() {
					validation.setNextButtonState();

				});
				uploaders = 1;
			}
		});
	}
};
