 export default function() {     
     if($('input[data-evidenceavailable]').prop('checked'))
            {
                $('.evidenceReason').css('display','inherit');
                $('input[data-evidencereason]').prop('disabled', false).addClass('sv-mandatory');
            }
            else
            {
                $('.evidenceReason').css('display','none');
                $('input[data-evidencereason]').prop('disabled', true).val('').removeClass('sv-mandatory');
            }
 }