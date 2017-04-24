import validator from '../shared/validator'; 

export default {
    validatePage: function validate() {
        var circumstancesCategory = $('body').find('.circumstancesCategory select option:selected').first();
        validator.validateSelects([circumstancesCategory]);

        var summaryText = $('textarea[data-remchar]').first();
        var evidenceReason = $('input[data-evidencereason]:visible').first();
        validator.validateInputs([summaryText, evidenceReason]);
        
        return $('.sv-mandatory').length;
    }
    ,
    validateEvidence: function validateEvidence() {
        if($('input[data-evidenceavailable]').prop('checked'))
        {
            return true;
        }
        else
        {
            var files = $('.sv-plupfile').length;
            if(files > 0)
            {return true} 
            else 
            {
                toastr.warning('You need to upload evidence');
                return false;
            }
        }
    }
    
}