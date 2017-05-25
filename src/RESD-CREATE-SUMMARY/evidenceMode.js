import validation from './validation';

export default function(toastr = require('toastr')) {
	if($('input[data-evidenceavailable]').prop('checked')) {
		if(!validation.filesUploaded())
        {
			$('.evidenceReason').fadeIn();
			$('input[data-evidencereason]').val() === '' ? $('input[data-evidencereason]').addClass('sv-mandatory') :
			$('input[data-evidencereason]').removeClass('sv-mandatory');
			$('[id^="PLUP_uploader"]').hide();
		}
		else {
			toastr.warning(resdErrors.deleteUploadedEvidence);
			$('input[data-evidenceavailable]').prop('checked', false);
		}
	}
	else {
		$('[id^="PLUP_uploader"]').fadeIn();
		$('.evidenceReason').fadeOut();
		$('input[data-evidencereason]').val('').removeClass('sv-mandatory');
	}
}
