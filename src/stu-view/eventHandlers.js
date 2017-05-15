import confirmDelete from './confirmDelete';

export default {
	deleteButtonClicked : function deleteButtonClicked() {
		$('body').on('click','[data-delete]', function(e) {
			e.preventDefault();
			confirmDelete($(this));
			return false;
		});
	}
};
