import eventHandlers from './eventHandlers';
import validation from './validation';
import '../shared/css/toastr.css';

function RESDInit() {
	eventHandlers.init();
	validation.validatePage();
}

sits_attach_event('window', 'load',function() {
	RESDInit();
});
