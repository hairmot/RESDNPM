var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-SUMMARY/validation';
import stuview from '../htmlTemplates/summaryNoEvidence';

describe('Summary Screen', function() {
	var $;

	it('validates a valid page', function() {
		expect(validation.validatePage()).to.be.true;
	})

	it('fails a validation if summary is missing', function() {
		global.staff = undefined; //remove staff override switch
		$('textarea').first().text('');
		validation.validatePage();
		expect($('.sv-mandatory').length).to.equal(1); 	// :visible selector broken but
	})												   	// hardcoded this one to take
													   	// evidencereason into account
     before(() => {
        var dom = new JSDOM(stuview);
        $ = require('jquery')(dom.window);
        global.$ = $;
		global.staff = true;
    });

	after(() => {
		global.staff = undefined;
	});
});
