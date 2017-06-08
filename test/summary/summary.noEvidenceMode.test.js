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
		evidenceMode();
		//wait for fade in
		setTimeout(function() {
		expect($('[id^="PLUP_uploader"]').css('display')).to.equal('block');
		},500);
	});

	it('Show the uploader if the reverse is true', function() {
		$('input[data-evidenceavailable]').prop('checked',true);
		$('input[data-evidencereason]').val('')
		evidenceMode();
		//wait for fade in
		setTimeout(function() {
		expect($('[id^="PLUP_uploader"]').css('display')).to.equal('none');
		},500);
	});



     before(() => {
        var dom = new JSDOM(stuview);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    });

});
