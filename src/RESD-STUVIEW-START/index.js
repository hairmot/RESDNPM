import eventHandlers from './eventHandlers';
import '../shared/css/fancyLoadingButton.css';
import tour from '../shared/js/tour';

function RESDInit() {
	eventHandlers.deleteButtonClicked();
	tour.initTour();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
