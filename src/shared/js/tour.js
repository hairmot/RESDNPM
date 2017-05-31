import Shepherd from 'tether-shepherd';
import '../css/tether-shepherd-arrows.css';

export default {
	initTour : function initTour() {
		if($('[data-tour]').length > 0){
			$('.sv-panel-primary').first().find('h2').append('<a href="#help" class="sv-pull-right help-tour" title="help"><strong>?</strong></a>');
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

	var steps = [];
	$('[data-tour]').each((i,e) => {
		var id = $(e).data('tour');
		// ensure no duplicates - important for areas where dynamically generated rows
		if(steps.filter(a => a.id === id).length  === 0)
		{
			steps.push({
				id: id,
				name: $(e).data('tour-name'),
				text : $(e).data('tour-text'),
				attachTo:'[data-tour="' + id + '"] top'
			});
		}
	});

	steps.forEach(a => {
		tour.addStep(a.id, {
			text : a.text,
			scrollTo:true,
			attachTo:a.attachTo
		});
	});

	tour.start();
}


	// tour.addStep($(e).data('tour-name'), {
	// 		text : $(e).data('tour-text'),
	// 		scrollTo:true,
	// 		attachTo:'[data-tour="' + $(e).data('tour') + '"] top'
	// 	})
