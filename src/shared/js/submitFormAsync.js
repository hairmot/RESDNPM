export default function submitFormAsync(done, row = null) {
	var formData = $('form').first().serialize() + '&NEXT.DUMMY.MENSYS.1=Next';
	$.post($('form').first().attr('action'), formData, function() {
		done(row);
	});
}
