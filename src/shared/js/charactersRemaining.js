export default function(limit, selector, outputSelector) {
	var input = $('' + selector);
	var output = $('' + outputSelector);
	var remaining = limit - input.val().length;

	output.html(remaining);
	input.on('keyup', function() {
		remaining = limit - input.val().length;
		output.html(Math.max(0, remaining));
		var text = input.text();
		if(text.length > limit) {
			input.text(text.substring(0,limit));
		}
	});
}

