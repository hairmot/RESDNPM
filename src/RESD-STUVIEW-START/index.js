import eventHandlers from './eventHandlers';
import '../shared/css/fancyLoadingButton.css';

function RESDInit() {
	eventHandlers.deleteButtonClicked();
}

sits_attach_event('window','load',function() { 
	RESDInit();
});
