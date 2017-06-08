import validation from './validation';

export default {

	updateCounters: function updateCounters() {
		updateRowsSelected('body','#selectedRows');
		this.updateSectionRowsSelected();
	},

	updateSectionRowsSelected: function updateSectionRowsSelected() {
		$('#accordion > div').each(urs);
	}
};

export function urs(i,e) {
	return updateRowsSelected($(e), $(e).find('.sectionSelectedRows'));
}
export function updateRowsSelected(element, outputSelector) {
		var rows = validRowsSelected(element);
		$(outputSelector).html(rows);
		return rows;
}
export function validRowsSelected(element) {
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
