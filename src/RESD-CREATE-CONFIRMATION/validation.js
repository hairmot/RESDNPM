import toastr from 'toastr';

export default {
	validatePage: function validatePage(silent = false) {
		var errors = [];
		if($('.requestRow').length === 0)
			errors.push('No valid tasks selected. Please return to Module and Assessments screen.');
		if(!$('[data-accept]').prop('checked'))
			errors.push('Please accept the confirmation statement');
		if(!silent) {
			errors.map(a=> toastr.warning(a));
		}

		return errors;
	}
};
