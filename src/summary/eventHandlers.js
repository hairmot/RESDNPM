import validation from './validation.js';
import getPlUploader from '../shared/js/getPlUploader.js';
import evidenceMode from './evidenceMode.js';
import toastr from 'toastr';

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
                    return true;
                }
                else
                {
                    toastr.warning('Required inputs are invalid');
                }
                return false;
        });
    }
}