export default function ajaxButton(selector, callback) {
	var url = $(selector).data('href');
	$.get(url, function(data) {
		callback()
	});
}
