import validator from '../shared/js/validator'; 

export default {
    validatePage: function validatePage() {
         return (this.validatePageInputs() && this.validateEvidence());          
    },
    validatePageInputs: function validate() {
        var circumstancesCategory = $('body').find('[data-resdreason] option:selected').first();
        validator.validateSelects([circumstancesCategory]);

        var summaryText = $('textarea[data-remchar]').first();
        var evidenceReason = $('input[data-evidencereason]:visible').first();
        validator.validateInputs([summaryText, evidenceReason]);
        
        return $('.sv-mandatory').length === 0 ? true : false;
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
                return false;
            }
        }
    }
    
}