var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import saveTask from '../../src/RESD-CREATE-ASSESSMENTS/saveTask';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';

describe('save Task', function() {
	var $;
	global.enhanced = 'Y';

	it('saves the task if the row is selected', function() {
		var called = false;
		saveTask($('.requestRow').first(), function() {called = true;});
		expect(	$('.save').val()).to.equal('Saving...');
		expect(called).to.be.true;
	});

	it('saves the task even if the row is not selected', function() {
		var called = false;
		$('.requestRow').first().find('.selected').prop('checked',false);
		saveTask($('.requestRow').first(), function() {called = true;});
		expect(called).to.be.true;
	});


     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });
});




