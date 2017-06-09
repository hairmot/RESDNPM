var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import check24Hours, {staffNamePromptExit,
	staffNamePromptSave,
	fsstDialogNoResponse,
	fsstDialogYesResponse
} from '../../src/RESD-CREATE-ASSESSMENTS/check24Hours';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';
import formatDate from '../../src/shared/js/formatDate';

describe("check 24 Hours tests", function(){
    var $;

	describe('check whether in 24 hours', function() {

		it('ignores assessments over 24 hours away', function() {
			expect(check24Hours($('.requestRow').first()).validate24Hours()).to.equal(false);
		})

		it('detects if an assessment is within 24 hours', function() {
			$('.dueDate').first().html(formatDate(new Date()));
			$('.selected').first().prop('checked',true);
			expect(check24Hours($('.requestRow').first()).validate24Hours()).to.equal(true);
		})

		it('prompts for fsst name if necessary', function() {
			$('body').append('<input id="fsstInput" value="Test Staff" />');
			var val24 = check24Hours($('.requestRow').first())
			val24.FSSTDialog(function() {});

			expect(global.sitsDialogTitleReceived).to.equal('24hourstitle');
			expect(global.sitsDialogMessageReceived).to.equal('24hoursmessage');
			expect(typeof(global.sitsDialogActionsReceived['Yes']) == 'function').to.be.true;
			expect(typeof(global.sitsDialogActionsReceived['No']) == 'function').to.be.true;
		})

		it('closes dialog if exit is chosen in staff name prompt dialog', function() {
			staffNamePromptExit({title:'namePrompt'}, $('<div><input type="checkbox" class="selected"/></div>'));
			expect(global.sitsDialogClosedTitle).to.equal('called');
		})

		it('closes dialog if exit is chosen in staff name prompt dialog', function() {
			global.sitsDialogClosedTitle = null;
			var saved = staffNamePromptSave($('<div><input type="checkbox" class="selected"/></div>'), () => {}, {warning: () => {}});
			expect(global.sitsDialogClosedTitle).to.equal('called');
			expect(saved).to.be.true;
		})

		it('display error if no fsst is input', function() {
			$('#fsstInput').val('');
			global.sitsDialogClosedTitle = 'blank';
			var saved = false;
			saved = staffNamePromptSave({warning: function() {}});
			expect(global.sitsDialogClosedTitle).to.equal('blank');
			expect(saved).to.be.false;
		})

		it('closes the fsst dialog if no is selected and deselects the row', function() {
			fsstDialogNoResponse
		})

		it('closes the fsst dialog if no is selected and deselects the row', function() {
			var row = $('.requestRow').first()
			row.find('.selected').first().prop('checked',true);
			fsstDialogNoResponse({title:'noresponse'}, row);
			expect(global.sitsDialogClosedTitle).to.equal('called');
			expect(row.find('.selected').first().prop('checked')).to.be.false;
		})

			it('closes the fsst dialog and calls staff name prompt', function() {
			var result = fsstDialogYesResponse({title:'yesresponse'});
			expect(global.sitsDialogClosedTitle).to.equal('called');

		})


	});


	before(() => {
	var dom = new JSDOM(requestRow);
	$ = require('jquery')(dom.window);
	global.$ = $;
	setGlobals();


});
});
