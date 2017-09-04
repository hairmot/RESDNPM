export default function() {
	if($('[data-noevidencereason]').val() === '') {
			$('[data-noevidencereason]').addClass('sv-mandatory');
			return false;
	}
	else {
		$('[data-noevidencereason]').removeClass('sv-mandatory');
		return true;
	}
}
