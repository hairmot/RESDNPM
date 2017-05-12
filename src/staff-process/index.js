import eventHandlers from './eventHandlers';
import validation from './validation';
import toastrCss from '../shared/css/toastr.css';

function RESDInit() {
      Object.keys(eventHandlers).map(a => eventHandlers[a]());
      
}

sits_attach_event("window","load",function() {
	RESDInit();
});