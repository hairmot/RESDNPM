export default {
	initToggleCheck : function() {
		if(this.applyToggleCheck())
        {
			this.bindToggleChecks();
			this.toggleCheck();
		}
	},
	toggleCheck : function toggleCheck() {
		$('input[data-applylc]:checked').length > 0 ? $('input[value="Next"]').first().prop('disabled',false) : $('input[value="Next"]').first().prop('disabled',true);
	},
	applyToggleCheck : function applyToggleCheck() {
		return $('div[data-applylc]').length > 0;
	},
	bindToggleChecks : function bindToggleChecks() {
		$('input[data-applylc]').on('change', this.toggleCheck());
	}
};