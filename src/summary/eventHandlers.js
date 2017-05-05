import validation from './validation.js';
import getPlUploader from '../shared/js/getPlUploader.js';
import evidenceMode from './evidenceMode.js';
import toastr from 'toastr';

export default {
    addChangeHandlers : function addInputChangeHandlers() {
        
        $('input, select, textarea').on('keyup change', function() {
            if(validation.validatePage()){
                $('input[value="Next"]').prop('disabled', false);
            } 
            else {
                $('input[value="Next"]').prop('disabled', true);
            }            
        });

        $('input[data-evidenceavailable]').on('change', function() {
           evidenceMode();
         });

         $('input[title="Next"]').on('click', function() {                
               return validation.validatePage();
        });
    }
}