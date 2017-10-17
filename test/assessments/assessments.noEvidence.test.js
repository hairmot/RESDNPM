var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-ASSESSMENTS/validateNoEvidence';
import setGlobals from '../aasits_function_mocks';

describe("Assessments Validation Tests", function(){
    var $;
	it('returns false if nothing entered', function() {
		expect(validation()).to.be.false;
		expect($('[data-noevidencereason]').hasClass('sv-mandatory')).to.be.true;
	})

		it('returns true if something entered', function() {
			$('[data-noevidencereason]').val('123');
		expect(validation()).to.be.true;
		expect($('[data-noevidencereason]').hasClass('sv-mandatory')).to.be.false;
	})

  before(() => {
    	var dom = new JSDOM(`<div><input data-noevidencereason type="text"/></div>`);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });
});
