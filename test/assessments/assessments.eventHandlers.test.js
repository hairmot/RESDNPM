var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import eventHandlers from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';

describe("Assessments Event handlers Tests", function(){
    var $;

	it("binds event handlers", function() {
		Object.keys(eventHandlers).map(a => eventHandlers[a]());
		$('input[data-continue]').prop('disabled',false);
		$('input[data-continue]').click();
		$('.save').click();
	});

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
    });
});
