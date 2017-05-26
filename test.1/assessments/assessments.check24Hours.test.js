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

describe("check 24 Hours tests", function(){
    var $;

	describe('check whether in 24 hours', function() {

		it('ignores assessments over 24 hours away', function() {
			expect(check24Hours.validate24Hours($('.requestRow').first())).to.equal(false);
		})

		it('detects if an assessment is within 24 hours', function() {
			$('.dueDate').first().html(formatDate(new Date()));
			expect(check24Hours.validate24Hours($('.requestRow').first())).to.equal(true);
		})

		it('prompts for fsst name if necessary', function() {
			$('body').append('<input id="fsstInput" value="Test Staff" />');
			check24Hours.FSSTDialog($('.requestRow').first(), function() {});

			expect(global.sitsDialogTitleReceived).to.equal('24hourstitle');
			expect(global.sitsDialogMessageReceived).to.equal('24hoursmessage');
			expect(typeof(global.sitsDialogActionsReceived['Yes']) == 'function').to.be.true;
			expect(typeof(global.sitsDialogActionsReceived['No']) == 'function').to.be.true;
		})

		it('closes dialog if exit is chosen in staff name prompt dialog', function() {
			staffNamePromptExit({title:'namePrompt'}, $('<div><input type="checkbox" class="selected"/></div>'));
			expect(global.sitsDialogClosedTitle).to.equal('namePrompt');
		})

		it('closes dialog if exit is chosen in staff name prompt dialog', function() {
			var saved = staffNamePromptSave({title:'namePrompt'}, $('<div><input type="checkbox" class="selected"/></div>'), () => {});
			expect(global.sitsDialogClosedTitle).to.equal('namePrompt');
			expect(saved).to.be.true;
		})

		it('closes the fsst dialog if no is selected and deselects the row', function() {
			fsstDialogNoResponse
		})

		it('closes the fsst dialog if no is selected and deselects the row', function() {
			var row = $('.requestRow').first()
			row.find('.selected').first().prop('checked',true);
			fsstDialogNoResponse({title:'noresponse'}, row);
			expect(global.sitsDialogClosedTitle).to.equal('noresponse');
			expect(row.find('.selected').first().prop('checked')).to.be.false;
		})

			it('closes the fsst dialog and calls staff name prompt', function() {
			var result = fsstDialogYesResponse({title:'yesresponse'});
			expect(global.sitsDialogClosedTitle).to.equal('yesresponse');

		})


	});


	before(() => {
	var dom = new JSDOM(requestRow);
	$ = require('jquery')(dom.window);
	global.$ = $;

});
});

function formatDate(date) {
	var monthNames = [
		'January', 'February', 'March',
		'April', 'May', 'June', 'July',
		'August', 'September', 'October',
		'November', 'December'
	];

	var day = ('0' + date.getDate()).slice(-2);
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return day + '/' + monthNames[monthIndex] + '/' + year;
}
