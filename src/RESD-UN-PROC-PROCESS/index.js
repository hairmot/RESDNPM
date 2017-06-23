import eventHandlers from './eventHandlers';
import validation from './validation';

function RESDInit() {
	eventHandlers.init();
	validation.verifyPage();
}

sits_attach_event('window', 'load',function() {
	RESDInit();
});
