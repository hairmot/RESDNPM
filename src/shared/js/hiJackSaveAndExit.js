
export default function() {
	$('input[value="Save & Exit"]').on('click', function(){
		var url = $('.saveAndExit').first().attr('href');
		jQuery.ajax({
			url: url,
			async:false
		});
		return true;
	});
}
