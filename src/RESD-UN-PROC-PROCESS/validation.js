import validator from '../shared/js/validator';

export default {
	verifyPage: function verifyPage() {
		var _this = this;
		$('.requestRow').toArray().map(a => _this.verifyRow(a));
		$('input[value="Confirm Decision"]').prop('disabled', $('.sv-mandatory').length !== 0);
	},
	verifyRow: function verifyRow(row) {
		validator.validateSelects([$(row).find('[data-decision] option:selected')]);
		return $(row).find('.sv-mandatory').length === 0;
	}
};
