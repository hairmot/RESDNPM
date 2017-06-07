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


    before(() =>{
        var dom = new JSDOM(processStage2);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    })

});
