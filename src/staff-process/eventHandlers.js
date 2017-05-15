import validation from './validation';
import toastr from 'toastr';
import submitFormAsync from '../shared/js/submitFormAsync';

export default {
	validateOnChange: function validateOnChange() {
		$('input, select').on('change keyup', function() {
			var row = $(this).closest('tr').hasClass('requestRow') ?  $(this).closest('tr'): $(this).closest('tr').prev();



			if(validation.validateRow(row)) {

				var stage2Length = row.next().find('[data-extensionlength] option:selected').text().split(' ')[0];

				var data = [ row.data('task'),
					row.find('[data-decision] option:selected').val(),
					row.find('[data-extensionlength] option:selected').text().split(' ')[0],
					row.find('[data-extensionduedate]').val(),
					//stage 2
					stage2Length === 'Other' ? '0' : stage2Length,
					row.next().find('[data-extensionduedate]').val()
					];
				$('[data-ajaxdata]').val(data.join('~'));
				if($('.sv-mandatory').length ===0)
				{
					submitFormAsync(() => {return true;});
				}
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

