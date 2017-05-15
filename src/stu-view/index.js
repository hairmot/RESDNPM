import refreshData from './refreshData';
import eventHandlers from './eventHandlers';
import '../shared/css/fancyLoadingButton.css';

function RESDInit() {
	refreshData();
	eventHandlers.deleteButtonClicked();
}

sits_attach_event('window','load',function() { // eslint-disable-line
	RESDInit();
});
