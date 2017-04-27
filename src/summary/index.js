import eventHandlers from './eventHandlers.js';
import evidenceMode from './evidenceMode.js';
import css from '../shared/css/toastr.css';
import autoUploader from '../shared/js/autoUploader.js';
import charactersRemaining from '../shared/js/charactersRemaining.js';

function RESDInit() {
    //bind all event handlers
    Object.keys(eventHandlers).map(a => eventHandlers[a]());
    evidenceMode();
    autoUploader();
    charactersRemaining(1500, '[data-remchar]', '#remChar');
}

sits_attach_event("window","load",function() {
	RESDInit();
});

