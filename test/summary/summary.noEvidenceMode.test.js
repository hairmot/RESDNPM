var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import setGlobals from '../aasits_function_mocks';
import evidenceMode from '../../src/RESD-CREATE-SUMMARY/evidenceMode';
import stuview from '../htmlTemplates/summaryNoEvidence';

describe('Summary Screen', function() {
	var $;

	it('Hides the uploader if the "no  evidence available" tick box is ticked', function() {
		$('input[data-evidenceavailable]').prop('checked',true);
		evidenceMode();
		expect($('[id^="PLUP_uploader"]').css('display')).to.equal('none');
	});

	it('Show the uploader if the reverse is true', function() {
		$('input[data-evidenceavailable]').prop('checked',false);
		evidenceMode(function() {
			expect($('[id^="PLUP_uploader"]').css('display')).to.equal('block');
		});
	});

	it('Show the uploader if the reverse is true', function() {
		$('input[data-evidenceavailable]').prop('checked',true);
		$('input[data-evidencereason]').val('')
		evidenceMode(function() {expect($('[id^="PLUP_uploader"]').css('display')).to.equal('none')});
	});



     before(() => {
        var dom = new JSDOM(stuview);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });

});
