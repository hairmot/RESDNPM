import eventHandlers from './eventHandlers.js';

function RESDInit() {
    eventHandlers.addChangedHandlers();
}

sits_attach_event("window","load",function() {
	RESDInit();
});

