import '../shared/css/toastr.css';
import '../RESD-CREATE-SUMMARY/css/styles.css';
import '../shared/css/styles.css';
import '../shared/css/fancyLoadingButton.css';
import RESDInit from '../RESD-CREATE-SUMMARY/index';


sits_attach_event('window','load',function() {
	RESDInit();
});

