import validation from './validation.js';
import getPlUploader from '../shared/getPlUploader.js';
import evidenceMode from './evidenceMode.js';

export default {
    addChangeHandlers : function addInputChangeHandlers() {
        
        $('input, select, textarea').on('keyup change', function() {
            validation.validatePage();
        });

        $('input[data-evidenceavailable]').on('change', function() {
           evidenceMode();
         });

         $('input[title="Next"]').on('click', function() {
                
                if(validation.validatePage() === 0 && validation.validateEvidence())
                {
                    toastr.success('Page Valid!');
                    return true;
                }
                else
                {
                    toastr.warning('required inputs are invalid');
                }
        });
    }



}