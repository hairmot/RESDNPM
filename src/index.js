import shplUpload from './sh-plUpload.js';
import rowsSelected from './rowsSelected.js';
import eventHandlers from './eventHandlers.js';

//attach handlers when js is initialised
function RESDInit() {
	eventHandlers.addRowChangeHandlers();
	eventHandlers.addSaveHandlers();
	eventHandlers.addContinueHandler();
	shplUpload.addUploadHandlers();
	shplUpload.addFileHandlers();
	rowsSelected.updateRowsSelected('body','#selectedRows');
	rowsSelected.updateSectionRowsSelected();
}

sits_attach_event("window","load",function() {
	RESDInit();
});


