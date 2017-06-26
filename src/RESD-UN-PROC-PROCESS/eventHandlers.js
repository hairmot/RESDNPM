import validation from './validation';
import {confirmDecision, submitHijack} from '../RESD-PROCESS-PROCESS/eventHandlers';
import saveRow from '../RESD-PROCESS-PROCESS/saveRow';

export default {
	init: function init() {
		this.bindDecisionChangedHandlers();
		this.bindContinueHandler();
	},
	bindDecisionChangedHandlers: function bindDecisionChangedHandlers() {
		$('[data-decision]').on('change', function() {
			var row = $(this).closest('.requestRow');
			if(validation.verifyRow(row)) {
				saveRow(row);
			}
			validation.validatePage();

		});
	},
	bindContinueHandler: function bindContinueHandler() {
		$('input[value="Confirm Decision"]').on('click', function(e) {
			return submitHijack(validation);
		});
	}
};
