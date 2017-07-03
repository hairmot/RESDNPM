import eventHandlers from '../RESD-CREATE-SUMMARY/eventHandlers.js';
import evidenceMode from '../RESD-CREATE-SUMMARY/evidenceMode.js';
import validation from '../RESD-CREATE-SUMMARY/validation';
import '../shared/css/toastr.css';
import autoUploader from '../shared/js/autoUploader.js';
import charactersRemaining from '../shared/js/charactersRemaining.js';
import '../RESD-CREATE-SUMMARY/css/styles.css';
import hiJackSaveAndExit from '../shared/js/hiJackSaveAndExit';
import '../shared/css/styles.css';
import '../shared/css/fancyLoadingButton.css';

function RESDInit() {
    //bind all event handlers
	setInterval(function() {validation.setNextButtonState();}, 300);
	Object.keys(eventHandlers).map(a => eventHandlers[a]());
	evidenceMode();
	autoUploader();
	hiJackSaveAndExit();
	charactersRemaining(summaryLength, '[data-remchar]', '#remChar');
	charactersRemaining(noevidlength, '[data-evidencereason]', '#remChar2');

}

sits_attach_event('window','load',function() {
	RESDInit();
});

