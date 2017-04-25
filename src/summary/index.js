import eventHandlers from './eventHandlers.js';
import evidenceMode from './evidenceMode.js';
import css from '../shared/css/toastr.css';

function RESDInit() {
    //bind all event handlers
    Object.keys(eventHandlers).map(a => eventHandlers[a]());
    evidenceMode();
}

sits_attach_event("window","load",function() {
	RESDInit();
});

