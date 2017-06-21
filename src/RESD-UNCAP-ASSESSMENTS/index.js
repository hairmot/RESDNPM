import '../shared/css/fancyLoadingButton.css';
import '../shared/css/styles.css';
import '../RESD-CREATE-ASSESSMENTS/css/styles.css';
import rowsSelected from '../RESD-CREATE-ASSESSMENTS/rowsSelected.js';
import eventHandlers from '../RESD-CREATE-ASSESSMENTS/eventHandlers.js';
import '../shared/css/toastr.css';

function RESDInit() {
	//update selected row counters - for page load
	rowsSelected.updateCounters();
	eventHandlers.init();
}

sits_attach_event('window','load',function() {
	RESDInit();
});

