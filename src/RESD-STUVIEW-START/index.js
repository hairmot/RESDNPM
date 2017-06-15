import eventHandlers from './eventHandlers';
import '../shared/css/fancyLoadingButton.css';
import './css/styles.css';
import '../shared/css/styles.css';
import tour from '../shared/js/tour';
import tooltips from '../shared/js/tooltips/';

function RESDInit() {
	eventHandlers.deleteButtonClicked();

	eventHandlers.animatedButtonClicked(['#beginNewRequest', '#beginNewRequest']);

	eventHandlers.openButtonClicked();
	eventHandlers.beginButtonClicked();
	tour.initTour();
	tooltips.init();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
