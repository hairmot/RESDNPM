var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import requestRow from '../htmlTemplates/requestRow';

import submit from '../../src/shared/js/submitFormAsync';

describe('Submit Form', function() {
	var $;

	it("sends the message", function() {
		var posted = false;
		var actionReceived = '';
		var dataReceived = '';
		var fakeAjaxPost = {
			"post" : (action, data, callback) => {
				actionReceived = action;
				dataReceived = data;
				callback();
			}
		}
		submit(function() {posted = true}, fakeAjaxPost );

		expect(posted).to.equal(true);
		expect(dataReceived).to.not.equal('');
		expect(actionReceived).to.equal('test');

	});

	before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
    });
})

