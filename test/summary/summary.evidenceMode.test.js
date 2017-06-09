var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import setGlobals from '../aasits_function_mocks';
import evidenceMode from '../../src/RESD-CREATE-SUMMARY/evidenceMode';
import stuview from '../htmlTemplates/summaryEvidence';

describe('Summary Screen', function() {
	var $;

	it('The uploader doesn\'t hide as there is still evidence that will need to be deleted', function() {
		$('input[data-evidenceavailable]').prop('checked',true);
		evidenceMode({warning: function(){}});
		expect($('[id^="PLUP_uploader"]').css('display')).to.equal('block');
	});



     before(() => {
        var dom = new JSDOM(stuview);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });

});
