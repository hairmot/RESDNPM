import eventHandlers from './eventHandlers.js';
import evidenceMode from './evidenceMode.js';

function RESDInit() {
    //bind all event handlers
    Object.keys(eventHandlers).map(a => eventHandlers[a]());
    evidenceMode();
}

sits_attach_event("window","load",function() {
	RESDInit();
});

