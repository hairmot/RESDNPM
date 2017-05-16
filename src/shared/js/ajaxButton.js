export default function ajaxButton(selector, callback) {
	var url = $(selector).attr('href');
	$.get(url, function() {
		callback();
	});
}
