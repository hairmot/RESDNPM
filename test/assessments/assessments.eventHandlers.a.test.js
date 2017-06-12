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
	var dataObject = {};
		dataObject.data = {};
		dataObject.data.silent = true;

	it("binds event handlers", function() {
		eventHandlers.init();
		$('input[data-continue]').prop('disabled',false);
		$('input[data-continue]').click();
	});

	it("returns a value on contine", function() {
		expect(typeof(eventHandlers.continue(dataObject))).to.equal('boolean');

	});

	it("can call the callback", function() {
		var success = false;
		eventHandlers.rowSaveCallback($('.requestRow').first(), {success: ()  =>  success = true});
		expect(success).to.be.true;

	});

	it("removes the loading animation if validation fails", function() {
		$('.taskType').first().val('');

		expect(eventHandlers.continue(dataObject)).to.be.false;

	});

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();

    });
});
