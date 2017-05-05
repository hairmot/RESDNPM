
export default function() {
    $('input[value="Save and Exit"]').on('click', function(e){
            var url = $('.saveAndExit').first().attr('href');
           jQuery.ajax({
                url: url,               
                async:false
            });
            return true;
    });
}