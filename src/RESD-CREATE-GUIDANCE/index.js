import validation from './validation';
import tour from '../shared/js/tour';
import '../shared/css/styles.css';

function RESDInit() {
	validation.initToggleCheck();
	$('div[data-applylc]').on('change', validation.toggleCheck);
	tour.initTour();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
