import uploaders from './uploaders.js';
import rowsSelected from './rowsSelected.js';
import eventHandlers from './eventHandlers.js';
import evidenceState from './evidenceState.js';
import toastrCss from '../shared/css/toastr.css';
import fancyLoadingButton from '../shared/css/fancyLoadingButton.css';
import styles from './css/styles.css';


//attach handlers when js is initialised
function RESDInit() {

	//trigger validation when rows change
	Object.keys(eventHandlers).map(a => eventHandlers[a]());

	//hook up individual file upload controls with the plupload instance on page
	Object.keys(uploaders).map(a => uploaders[a]());

	//update selected row counters - for page load
	rowsSelected.updateCounters();

	//handle state of evidence for requests based on plUpload instance on page. checks every .5 secs.
	evidenceState.init();
}

sits_attach_event("window","load",function() {
	RESDInit();
	$( "#accordion" ).accordion({
		collapsible : true,							
		active : enhanced === "Y" ? false : parseInt($('[data-accordion]').val()),
		heightStyle: 'content'
	}).fadeIn("slow");
});