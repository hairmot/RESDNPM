import validation from './validation';
import tour from '../shared/js/tour';

function RESDInit() {
	validation.initToggleCheck();
	$('div[data-applylc]').on('change', validation.toggleCheck);
	tour.initTour();
}

sits_attach_event('window','load',function() {
	RESDInit();
});
