export default {
	nextButtonControl: function nextButtonControl() {
		$('input[value="Submit Request"]').prop('disabled', !this.validatePage());
	},

	validatePage: function validatePage() {
		$('.requestRow').length === 0 ? $('input[value="Submit Request"]').val('No Tasks Selected') : $('input[value="Submit Request"]').val('Submit Request');
		return $('[data-accept]').prop('checked') && $('.requestRow').length > 0;
	}
};