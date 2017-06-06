import '../shared/css/styles.css';
import events from './eventHandlers';
import toastr from 'toastr';
import '../shared/css/toastr.css';

function RESDInit() {
	events(toastr).init();
}

sits_attach_event('window', 'load', () => {
	RESDInit();
});
