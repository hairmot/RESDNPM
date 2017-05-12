import validation from './validation';
import toastr from 'toastr';
import submitFormAsync from '../shared/js/submitFormAsync'; 

export default {
	validateOnChange: function validateOnChange() {
		$('input, select').on('change keyup', function() {
			var row = $(this).closest('.requestRow');
			if(validation.validateRow(row)) {
				var data = [ row.data('task'), row.find('[data-stage]').val(),
					row.find('[data-decision] option:selected').val(),
					row.find('[data-extensionlength] option:selected').text().split(' ')[0],
					row.find('[data-extensionduedate]').val()];
				$('[data-ajaxdata]').val(data.join('~'));
				submitFormAsync(() => {return true;});
			}

		});
	},
	pageSubmit : function pageSubmit() {
		$('input[value="Confirm Decision"]').on('click', function() {
			validation.validatePage();
			if($('.sv-mandatory').length > 0) {
				toastr.warning('You have unfinished rows');
				return false;
			}
			else {
				return true;
			}  
		});
	}
};

