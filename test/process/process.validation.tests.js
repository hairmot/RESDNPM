var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation, {extensionLength}from '../../src/RESD-PROCESS-PROCESS/validation';
import process from '../htmlTemplates/process';

describe("process Validation Tests", function(){

	it('validates the page', function() {
		global.$.prototype.datepicker = function(name, opts) {};
		validation.validatePage();
		//expect($('.sv-mandatory').length).to.equal(0);
	});

	it('clears out inputs if decline is selected', function() {
		var row = $('.requestRow');
		$(row).find('[data-decision]').val(2);
		validation.validatePage();
		expect($(row).find('[data-extensionlength] option:selected').val()).to.equal('');
		expect($(row).find('[data-extensionduedate]').first().val()).to.equal('');
	});

	it("makes a stage 2 date mandatory if the option is selected", function() {
		var row = $('.requestRow');
		var stage2length = $(row).next('.stage2Row').find('[data-extensionlength]');
		var stage2duedate = $(row).next('.stage2Row').find('[data-extensionduedate]');

		stage2length.val(0);
		extensionLength(stage2length.find('option:selected'), stage2duedate);
		expect(stage2duedate.prop('disabled')).to.be.false;

		stage2duedate.val('01/May/2017');

		extensionLength(stage2length.find('option:selected'), stage2duedate);
		expect(stage2duedate.prop('disabled')).to.be.false;

		validation.validatePage();

		stage2length.val('');

		extensionLength(stage2length.find('option:selected'), stage2duedate);
		expect(stage2duedate.prop('disabled')).to.be.true;


	})

    before(() =>{
        var dom = new JSDOM(process);
        $ = require('jquery')(dom.window);
        global.$ = $;
    })

});
