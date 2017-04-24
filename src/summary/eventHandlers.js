import validation from './validation.js';

export default {
    addChangedHandlers : function addChangedHandlers() {
        $('input, select, textarea').on('keyup change', function() {
            validation.validate();
        });

         $('input[data-evidenceavailable]').on('change', function() {
                if($(this).prop('checked'))
                {
                    $('.evidenceReason').css('display','inherit');
                    $('input[data-evidencereason]').prop('disabled', false).addClass('sv-mandatory');
                }
                else
                {
                     $('.evidenceReason').css('display','none');
                     $('input[data-evidencereason]').prop('disabled', true).val('').removeClass('sv-mandatory');
                }
         });
    }

   
}