import eventHandlers from './eventHandlers';
import '../shared/css/toastr.css';

function RESDInit() {
	eventHandlers.init();
}

sits_attach_event('window','load',function() {// eslint-disable-line
	RESDInit();
});
