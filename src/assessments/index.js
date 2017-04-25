import shplUpload from './sh-plUpload.js';
import rowsSelected from './rowsSelected.js';
import eventHandlers from './eventHandlers.js';
import toastrCss from '../shared/css/toastr.css';
import fancyLoadingButton from '../shared/css/fancyLoadingButton.css';
import styles from './css/styles.css'

//attach handlers when js is initialised
function RESDInit() {

	//trigger validation when rows change
	eventHandlers.addValidationOnRowChange();

	//add ajax save on rows
	eventHandlers.addIndividualRowSaveHandlers();

	//trigger overall page validation when continue is clicked 
	eventHandlers.addContinueHandler();

	//hook up individual file upload controls with the plupload instance on page
	shplUpload.bindFileUploaders();

	//update selected row counters - for page load
	rowsSelected.updateCounters();
}

sits_attach_event("window","load",function() {
	RESDInit();
	$( "#accordion" ).accordion({	
							collapsible : true, 
							active : 'none',
							heightStyle: 'content'
						});
});


