import validation from './validation';

export default {
	updateCounters: function updateCounters() {
		this.updateRowsSelected('body','#selectedRows');
		this.updateSectionRowsSelected();
		//$('[data-continue]').prop('disabled', !validation.validatePage(true));
	},
	updateSectionRowsSelected: function updateSectionRowsSelected() {
		var _this = this;
		$('#accordion > div').each(function(i,e) {
			_this.updateRowsSelected($(e), $(e).prev().find('.sectionSelectedRows'));
		});
	},

	updateRowsSelected: function updateRowsSelected(element, outputSelector) {
		var rows = this.validRowsSelected(element);
		$(outputSelector).html(rows);
		return rows;
	},

	validRowsSelected: function validRowsSelected(element) {
		var count = 0;
		$(element).find('.requestRow').each(function(i,e) {
			if($(e).find('.save').hasClass('sv-btn-success') || $(e).find('.save').hasClass('sv-btn-default'))
            {
				if($(e).find('.selected').first().prop('checked'))
                {
					count++;
				}
			}
		});
		return count;
	}
};
