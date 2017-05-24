var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-SUMMARY/validation';
import stuview from '../htmlTemplates/summaryEvidence';

describe('Summary Screen', function() {
	var $;

	it('validates a valid page', function() {
		expect(validation.validatePage()).to.be.true;
	})

	it('sets the next button to enabled  if the page is valid and nothing is uploading', function() {
		//set window pluploader to ready (mock)

		global.uploader = {a: {state:1}};

		validation.setNextButtonState();

		expect($('input[value="Next"]').prop('disabled')).to.be.false; 	// :visible selector broken but
	})

	it('sets the next button to disabled  if the page is valid and evidence is uploading', function() {
		//set window pluploader to ready (mock)

		global.uploader = {a: {state:2}};

		validation.setNextButtonState();

		expect($('input[value="Next"]').prop('disabled')).to.be.true; 	// :visible selector broken but
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
    });

	after(() => {
		global.staff = undefined;
	});
});
