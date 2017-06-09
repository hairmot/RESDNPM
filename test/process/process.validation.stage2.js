var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation, {extensionLength}from '../../src/RESD-PROCESS-PROCESS/validation';
import processStage2 from '../htmlTemplates/processStage2';
import setGlobals from '../aasits_function_mocks';


describe("process Validation Tests", function(){

	it('validates the page', function() {
		global.$.prototype.datepicker = function(name, opts) {};
		var res = validation.validateRow($('.requestRow').first());
		expect(res).to.be.true;
	});

	it('invalidates an unknown value', function() {
		$('.stage2Row [data-extensionlength]').val('X');
		var res = validation.validateRow($('.requestRow').first());
		expect(res).to.be.false;
	});

	it('invalidates no input', function() {
		$('.stage2Row [data-extensionlength]').val('');
		var res = validation.validateRow($('.requestRow').first());
		expect(res).to.be.false;
	});

	it('invalidates an empty grant', function() {
		$('.stage2Row [data-extensionlength]').val('0');
		var res = validation.validateRow($('.requestRow').first());
		expect(res).to.be.false;
	});


	it('validates a grant with a value provded', function() {
		$('.stage2Row [data-extensionlength]').val('0');
		$('.stage2Row [data-extensionduedate]').val('123');
		var res = validation.validateRow($('.requestRow').first());
		expect(res).to.be.true;
	});


    before(() =>{
        var dom = new JSDOM(processStage2);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    })

});
