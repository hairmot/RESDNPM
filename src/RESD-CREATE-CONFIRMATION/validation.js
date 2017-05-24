export default {
	validatePage: function validatePage(silent = false, toastr = require('toastr')) {
		var errors = [];
		if($('.requestRow').length === 0)
			errors.push(resdErrors.noValidTasks);
		if(!$('[data-accept]').prop('checked'))
			errors.push(resdErrors.pleaseAccept);
		if(!silent) {
			errors.map(a=> toastr.warning(a));
		}

		return errors;
	}
};
