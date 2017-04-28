import validator from './validation.js';
import saveTask from  './saveTask.js';
import rowsSelected from './rowsSelected.js';
import toastr from 'toastr';

export default {
//on each input change - check validation, display message on save button.
	addValidationOnRowChange: function addValidationOnRowChange() {	
		$('.requestRow input:not([type="file"]), .requestRow select').on("change keyup", function() {
			var requestRow = $(this).closest('.requestRow')
			$(requestRow).find('.add').removeClass('sv-mandatory');
			if (validator.validateRow(requestRow))
			{
				$(requestRow).find('.save').first().val('Save Changes').removeClass('sv-btn-success sv-btn-primary sv-btn-danger').addClass('sv-btn-warning').prop('disabled',false);
			}
			else
			{
				$(requestRow).find('.save').first().val('Validation Errors').removeClass('sv-btn-success sv-btn-primary sv-btn-warning').addClass('sv-btn-danger').prop('disabled',true);
			}
		});
	},


	addContinueHandler: function addContinueHandler() {
		$('input[data-continue]').on('click', function (e){
			var rowsValidated = 0;
			var result = true;
			$('.requestRow').each(function(i,e) {
				if($(e).find('.selected').first().prop('checked')) {
					rowsValidated++;
					if(!validator.validateRow(e))
					{
						toastr.warning('One or more selections invalid. Please check your inputs');
						result = false;
					}
					else
					{
						if($(e).find('.save').hasClass('sv-btn-default') || $(e).find('.save').hasClass('sv-btn-success'))
						{
							validator.validateEvidence(e) ? result = true : (result = false, toastr.warning('Please upload Evidence'));
					
						}
						else
						{
							toastr.warning('One of your selections has not been saved');
							result = false;
						}
					}	
				}
				else
				{
					if($(e).find('.save').hasClass('sv-btn-warning'))
					{
						result = false;
						toastr.warning('One of your changes has not been saved');
					}
				}
			});

			 if (rowsValidated > 0 )
			 {
				if(result)
				{
				 	//return result;
					 result = true;
				}
				else
				{				   
					result = false;
				}

			 } 
			 else
			 {
				   toastr.warning('No valid tasks selected');
				   result = false;
			};
			return result;
		});
	}, 

	//populate ajax input, serialize form and submit. Update message in save button
	addIndividualRowSaveHandlers: function addIndividualRowSaveHandlers() {
		$('.save').click(function (e) {
			e.preventDefault();
			var _this = this;
			
			var toSave = $(this).closest('.requestRow');
			
			if(validator.validateRow(toSave)) {
				var toSaveText = [
					toSave.find('.mapCode').html(),
					toSave.find('.mabSeqn').html(),
					toSave.find('input[type="checkbox"]').prop('checked'),
					toSave.find('.taskTitle').val(),
					toSave.find('.dueDate').val(),
					toSave.find('.taskType option:selected').val(),
					toSave.find('.dissertation option:selected').val()
				];
				$('[data-ajaxinput]').text(toSaveText.join('~'));			
				$(_this).prop('disabled','true').val('Saving...').addClass('progress-striped progress active').css('height','34px').css('margin-bottom',0);
				saveTask(function() {
					$(_this).removeClass('sv-btn-primary sv-btn-warning  sv-btn-danger progress-striped progress active').addClass('sv-btn-success').val('Saved!');
					toastr.success('Saved data');
					rowsSelected.updateCounters();		
				});			
			}
		});
	}
}