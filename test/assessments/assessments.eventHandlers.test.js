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
		//$('.save').first().click();
	});

	it("callback calls success message and updates save button text", function() {
		var successMessage = '';
		eventHandlers.rowSaveCallback($('.requestRow').first(), {success: () => {successMessage = 'done'} });
		expect(successMessage).to.equal('done');
		expect($('.requestRow').first().find('.save').val() === 'Saved!').to.be.true;
	});

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();

    });
});
