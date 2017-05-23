import ajaxButton from '../shared/js/ajaxButton';
import refreshData from './refreshData';

export default function deleteRequest(button) {
	$(button).prop('disabled', true).addClass('progress-striped progress active');
	ajaxButton(button, function() {
		refreshData();
	});
}
