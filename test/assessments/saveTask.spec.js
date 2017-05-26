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

	it('saves the task', function() {

		//saveTask($('.requestRow').first());
		//expect(	$('.save').val()).to.equal('Saving...');
	});


     before(() => {
        var dom = new JSDOM(requestRow);

        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();


    });
});




