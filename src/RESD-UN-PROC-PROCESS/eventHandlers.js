import validation from './validation';
import {confirmDecision} from '../RESD-PROCESS-PROCESS/eventHandlers';

export default {
	init: function init() {
		this.bindDecisionChangedHandlers();
		this.bindContinueHandler();
	},
	bindDecisionChangedHandlers: function bindDecisionChangedHandlers() {
		$('[data-decision]').on('change', validation.verifyPage);
	},
	bindContinueHandler: function bindContinueHandler() {
		$('input[value="Confirm Decision"]').on('click', confirmDecision);
	}

};
