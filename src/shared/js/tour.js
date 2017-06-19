import Shepherd from 'tether-shepherd';
import '../css/tether-shepherd-arrows.css';

export default {
	initTour : function initTour() {
		if($('[data-tour]').length > 0){
			$('.sv-panel-primary').first().find('h2').append('<a href="#help" aria-hidden class="sv-pull-right help-tour" title="help"><strong>?</strong></a>');
			$('body').on('click', '.help-tour', startTour);
		}
	}
};

function startTour() {

	let tour = new Shepherd.Tour({
		defaults: {
			classes: 'shepherd-theme-square-dark'
		}
	});

	steps.forEach(a => {
		tour.addStep(a.id, {
			title: a.name.replace( /(^|\s)([a-z])/g , (m,p1,p2) =>  p1+p2.toUpperCase()),
			text : a.text,
			scrollTo:true,
			showCancelLink: true,
			attachTo:a.attachTo
		});
	});

	tour.start();
}
