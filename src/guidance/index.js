import validation from './validation';

function RESDInit() {
    
          validation.initToggleCheck();

          $('div[data-applylc]').on("change", validation.toggleCheck);
  
}

sits_attach_event("window","load",function() {
	RESDInit();
});