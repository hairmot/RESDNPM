import validator from '../shared/js/validator'; 

export default {
    validateRow : function(row) {

        var decision = $(row).find('[data-decision] option:selected').first();
        var length = $(row).find('[data-extensionlength] option:selected').first();
        var duedate = $(row).find('[data-extensionduedate]').first();

        if(decision.text() === 'Declined')
        {
            decision.parent().removeClass('sv-mandatory');
            length.parent().removeClass('sv-mandatory').val('').prop('disabled', true);
            duedate.removeClass('sv-mandatory').val('').prop('disabled', true);
        }
        else {      
            length.parent().prop('disabled',false);
            extensionLength(length, duedate);

            validator.validateSelects([length, decision]);
            validator.validateInputs([duedate]);
        }
        return $(row).find('.sv-mandatory').length === 0;

        
    },
    validatePage : function validatePage() {
        var _this = this;
        $('.requestRow').each(function(i,e) {
            _this.validateRow(e);
        });
    }
}

function extensionLength(length, duedate) {
    
    if($(length).val() === "0")
    {
        $(duedate).prop('disabled', false);        
    }
    else
    {
        $(duedate).prop('disabled',  true); 
        $(duedate).datepicker('setDate', $(length).val()  );
    }
   
}