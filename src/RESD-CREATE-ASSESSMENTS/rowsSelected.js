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
			_this.updateRowsSelected($(e), $(e).find('.sectionSelectedRows'));
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
			if(validation.saveButtonSavedState(e))
            {
				if($(e).find('.selected').first().prop('checked') && validation.validateRow(e))
                {
					count++;
				}
			}
		});
		return count;
	}
};
