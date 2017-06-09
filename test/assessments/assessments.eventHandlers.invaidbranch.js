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

	it('doesn\'t validate', function() {
		eventHandlers.addIndividualRowSaveHandlers();
		$('.taskType').first().val('');
		$('.save').first().click();
	});

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });
});
