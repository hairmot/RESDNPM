import validator from '../shared/js/validator';

export default {
	validateRow : function(row) {

		var decision = $(row).find('[data-decision] option:selected').first();
		var length = $(row).find('[data-extensionlength] option:selected').first();
		var duedate = $(row).find('[data-extensionduedate]').first();
		var stage2length = $(row).next('.stage2Row').find('[data-extensionlength] option:selected');
		var stage2duedate = $(row).next('.stage2Row').find('[data-extensionduedate]');

		if(decision.text() === 'Declined')
        {
			//clear everything
			decision.parent().removeClass('sv-mandatory');
			length.parent().removeClass('sv-mandatory').prop('disabled', true);
			duedate.removeClass('sv-mandatory').prop('disabled', true);
			stage2length.parent().removeClass('sv-mandatory').prop('disabled', true);
			stage2duedate.removeClass('sv-mandatory').prop('disabled', true);
		}
		else {
			//validate stage 1
			length.parent().prop('disabled',false);
			extensionLength(length, duedate);
			validator.validateSelects([length, decision]);
			validator.validateInputs([duedate]);

			//validate stage 2
			stage2length.parent().prop('disabled',false);
			stage2duedate.prop('disabled',false);
			extensionLength(stage2length, stage2duedate);

		}

		if(stage2length.val() !== '' && stage2duedate.val() !== '')
		{
			length.parent().removeClass('sv-mandatory');
			duedate.removeClass('sv-mandatory');
		}

		return $(row).find('.sv-mandatory').length === 0;


	},
	validatePage : function validatePage() {
		var _this = this;
		$('.requestRow').each(function(i,e) {
			_this.validateRow(e);
		});
	}
};

function extensionLength(length, duedate) {

	if($(length).val() === '0')
    {
		$(duedate).prop('disabled', false);
		$(duedate).prop('readonly',true);
		$(duedate).val() === '' ? $(duedate).addClass('sv-mandatory') : $(duedate).removeClass('sv-mandatory');
	}
	else
    {

		$(duedate).prop('disabled',  true).removeClass('sv-mandatory');
		$(duedate).datepicker('setDate', $(length).val()  );
	}

}
