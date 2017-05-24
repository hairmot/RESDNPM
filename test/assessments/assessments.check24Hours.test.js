var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import check24Hours from '../../src/RESD-CREATE-ASSESSMENTS/check24Hours';
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
			check24Hours.FSSTDialog($('.requestRow').first(), function() {});

			expect(global.sitsDialogTitleReceived).to.equal('24hourstitle');
			expect(global.sitsDialogMessageReceived).to.equal('24hoursmessage');
			expect(typeof(global.sitsDialogActionsReceived['Yes']) == 'function').to.be.true;
			expect(typeof(global.sitsDialogActionsReceived['No']) == 'function').to.be.true;
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
