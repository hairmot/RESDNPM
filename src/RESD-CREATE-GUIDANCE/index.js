import validation from './validation';
import tour from '../shared/js/tour';
import '../shared/css/styles.css';
import '../shared/css/fancyLoadingButton.css';

function RESDInit() {
	validation.initToggleCheck();
	$('div[data-applylc]').on('change', validation.toggleCheck);
	tour.initTour();
	$('input[value="Next"]').on('click', function() {
		$(this).addClass('progress progress-striped active');
	})
}

sits_attach_event('window','load',function() {
	RESDInit();
});
