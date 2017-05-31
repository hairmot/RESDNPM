import eventHandlers from './eventHandlers.js';
import evidenceMode from './evidenceMode.js';
import '../shared/css/toastr.css';
import autoUploader from '../shared/js/autoUploader.js';
import charactersRemaining from '../shared/js/charactersRemaining.js';
import './css/styles.css';
import validation from './validation';
import hiJackSaveAndExit from '../shared/js/hiJackSaveAndExit';

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

