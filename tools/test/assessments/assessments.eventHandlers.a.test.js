var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import jquery from 'jquery';
import eventHandlers from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';

describe("Assessments Event handlers Tests", function(){
    var $;

	it("binds event handlers", function() {
		eventHandlers.init();
		$('input[data-continue]').prop('disabled',false);
		$('input[data-continue]').click();
	});

	it("returns a value on contine", function() {
		expect(typeof(eventHandlers.continue())).to.equal('boolean');
	});

	it("can call the callback", function() {
		var success = false;
		eventHandlers.rowSaveCallback($('.requestRow').first(), {success: ()  =>  success = true});
		expect(success).to.be.true;

	});

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();

    });
});
