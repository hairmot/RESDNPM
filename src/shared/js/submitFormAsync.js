export default function submitFormAsync(done, ajax = $) {
	var formData = $('form').first().serialize() + '&NEXT.DUMMY.MENSYS.1=Next';
	ajax.post($('form').first().attr('action'), formData, function() {
		done();
	});
}
