import validator from '../shared/js/validator'; 
import toastr from 'toastr';

export default {
    validateRow: function validateRow(row) {

        //collect inputs
        var dissertation = $(row).find('.dissertation option:selected').first();
        var taskType = $(row).find('.taskType option:selected').first();
        var evidence = $(row).find('.add');

        //validate selects
        validator.validateSelects([dissertation, taskType]);
        
        //return whether row is valid
        return $(row).find('.sv-mandatory:visible').length === 0 ? true : false;
    }, 
    validateEvidence : function validateEvidence(evidence) {
        var evidBtn = $(evidence).find('.add');
        return $(evidBtn).parent().parent().css('display') === 'block' ? ($(evidBtn).addClass('sv-mandatory'),false) : ($(evidBtn).removeClass('sv-mandatory'), true); 
    }
}

