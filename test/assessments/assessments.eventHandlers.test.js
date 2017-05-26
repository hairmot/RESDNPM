var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import eventHandlers, {rowSaveCallback, addContinueHandler} from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';

describe("Assessments Event handlers Tests", function(){
    var $;

	it("binds event handlers", function() {
		Object.keys(eventHandlers).map(a => eventHandlers[a]());
		$('input[data-continue]').prop('disabled',false);
		//$('input[data-continue]').click();
		//$('.save').click();
		//expect($('.save').val()).to.equal('Saving...');
	});

	it("callback calls success message and updates save button text", function() {
		var successMessage = '';
		rowSaveCallback($('.requestRow').first(), {success: () => {successMessage = 'done'} });
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
