import validator from '../shared/js/validator';

export default {
	validateRow : function(row) {

		var decision = $(row).find('[data-decision] option:selected').first();
		var length = $(row).find('[data-extensionlength="validate"] option:selected').first();
		var duedate = $(row).find('[data-extensionduedate="validate"]').first();
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
			if(decision.parent().prop('disabled')) {
				//this is a stage 2 request (identified by the disabled prop on decision) so we must have a stage 2 decision
				validateStage2(stage2length, stage2duedate);
			}
			else {
				extensionLength(stage2length, stage2duedate);
			}


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

export function extensionLength(length, duedate) {
	switch($(length).val()) {
	case '0':
		$(duedate).prop('disabled', false);
		$(duedate).prop('readonly',true);
		$(duedate).val() === '' ? $(duedate).addClass('sv-mandatory') : $(duedate).removeClass('sv-mandatory');
		break;
	case 'X':
		$(duedate).prop('disabled',  true).removeClass('sv-mandatory');
		break;
	default:
		$(duedate).prop('disabled',  true).removeClass('sv-mandatory');
		$(duedate).datepicker('setDate', $(length).val()  );
		break;
	}


}

export function validateStage2(length, duedate) {
	switch($(length).val()) {
	case '':
		duedate.prop('disabled', true).val('');
		length.parent().addClass('sv-mandatory');
		break;
	case '0':
		duedate.val() == '' ? duedate.addClass('sv-mandatory') :duedate.removeClass('sv-mandatory') ;
		break;
	default:
		length.parent().removeClass('sv-mandatory');
		extensionLength(length, duedate);
	}
}
