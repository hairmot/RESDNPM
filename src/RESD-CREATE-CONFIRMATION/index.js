import eventHandlers from './eventHandlers';
import validation from './validation';

function RESDInit() {
	eventHandlers.init();
	validation.nextButtonControl();
}

sits_attach_event('window','load',function() {// eslint-disable-line
	RESDInit();
});
