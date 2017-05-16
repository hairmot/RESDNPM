import validation from './validation';
import toastr from 'toastr';

export default function() {
	if($('input[data-evidenceavailable]').prop('checked')) {
		if(!validation.filesUploaded())
        {
			$('.evidenceReason').fadeIn();
			$('input[data-evidencereason]').val() === '' ? $('input[data-evidencereason]').addClass('sv-mandatory') :
			$('input[data-evidencereason]').removeClass('sv-mandatory');
			$('[id^="PLUP_uploader"]').hide();
		}
		else {
			toastr.warning('Please delete any uploaded evidence');
			$('input[data-evidenceavailable]').prop('checked', false);
		}
	}
	else {
		$('[id^="PLUP_uploader"]').fadeIn();
		$('.evidenceReason').fadeOut();
		$('input[data-evidencereason]').val('').removeClass('sv-mandatory');
	}
}
