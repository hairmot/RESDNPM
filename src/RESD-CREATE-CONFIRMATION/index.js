import eventHandlers from './eventHandlers';
import '../shared/css/toastr.css';
import '../shared/css/styles.css';
import '../shared/css/fancyLoadingButton.css';

function RESDInit() {
	eventHandlers.init();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
