import shplUpload from './sh-plUpload.js';
import rowsSelected from './rowsSelected.js';
import eventHandlers from './eventHandlers.js';
import toastrCss from '../shared/css/toastr.css';
import fancyLoadingButton from '../shared/css/fancyLoadingButton.css';
import styles from './css/styles.css';
import evidence from './evidence.js';

//attach handlers when js is initialised
function RESDInit() {

	//trigger validation when rows change
	eventHandlers.addValidationOnRowChange();

	//add ajax save on rows
	eventHandlers.addIndividualRowSaveHandlers();

	//trigger overall page validation when continue is clicked 
	eventHandlers.addContinueHandler();

	//hook up individual file upload controls with the plupload instance on page
	shplUpload.init();

	//update selected row counters - for page load
	rowsSelected.updateCounters();

	//handle state of evidence for requests based on plUpload instance on page.
	evidence.init();
}




sits_attach_event("window","load",function() {
	RESDInit();
	$( "#accordion" ).accordion({	
							collapsible : true, 
							active : 'none',
							heightStyle: 'content'
						});
	$( "#accordion" ).fadeIn("slow");
});