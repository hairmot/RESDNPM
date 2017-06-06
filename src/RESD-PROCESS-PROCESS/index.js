import eventHandlers from './eventHandlers';
import validation from './validation';
import '../shared/css/toastr.css';
import './css/styles.css';
import '../shared/css/styles.css';

function RESDInit() {
	Object.keys(eventHandlers).map(a => eventHandlers[a]());
	validation.validatePage();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
