import ajaxButton from '../shared/js/ajaxButton';

export default function deleteRequest(button, callback = require('refreshData')) {
	$(button).prop('disabled', true).addClass('progress-striped progress active');
	ajaxButton(button, function() {
		callback();
	});
}
