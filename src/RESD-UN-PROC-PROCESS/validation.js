import validator from '../shared/js/validator';

export default {
	verifyPage: function verifyPage() {
		validator.validateSelects($('[data-decision] option:selected').toArray().map(a => $(a)));
	}
};
