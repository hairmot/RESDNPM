 export default function() {     
     if($('input[data-evidenceavailable]').prop('checked'))
            {
                $('.evidenceReason').fadeIn();
                $('input[data-evidencereason]').prop('disabled', false);
                $('input[data-evidencereason]').val() === "" ? $('input[data-evidencereason]').addClass('sv-mandatory') : 
                    $('input[data-evidencereason]').removeClass('sv-mandatory');
                $('input[value="Next"]').prop('disabled',true);
                $('[id^="PLUP_uploader"]').hide();
            }
            else
            {
                $('[id^="PLUP_uploader"]').fadeIn();
                $('.evidenceReason').fadeOut();
                $('input[data-evidencereason]').prop('disabled', true).val('').removeClass('sv-mandatory');
            }
 }