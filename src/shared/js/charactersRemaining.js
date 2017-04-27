export default function(limit, selector, outputSelector) {
    $('' + outputSelector).html(limit - $('' + selector).val().length);
    $('' + selector).on("keyup", function() {
		var remaining = 1500 - $(this).val().length;
		$('' + outputSelector).html(remaining);
	});
}