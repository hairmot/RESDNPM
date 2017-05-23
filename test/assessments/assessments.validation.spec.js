var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-ASSESSMENTS/validation';
import eventHandlers from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';
import toastr from 'toastr';


describe("Assessments Validation Tests", function(){
    var $;
	var resdErrors = {
						"NO_TASKS_SELECTED":"NO_TASKS_SELECTED",
						"INVALID_SELECTION":"INVALID_SELECTION",
						"MISSING_EVIDENCE":"MISSING_EVIDENCE",
						"UNSAVED_TASK":"UNSAVED_TASK"
					 };

	describe('validate page', function() {
        it('passes a valid page', function() {
			expect(validation.validatePage()).to.equal(true);
        });

		it('it warns if no rows selected', function() {
			var row = $('.requestRow').first();
			row.find('.selected').first().prop('checked', false).change();
			var results = [];
			validation.validatePage(false, resdErrors, {warning:(a) => results.push(a)});
			expect(results.indexOf("NO_TASKS_SELECTED") > -1).to.equal(true);
        });

		it('fails an invalid page', function() {
			var row = $('.requestRow').first();
			row.find('.taskType').first().val("").keyup();
			expect(validation.validatePage(false, resdErrors, {warning:(a) => console.log(a)})).to.equal(false);
        });

		it('displays an unsaved row message if the row is valid but not saved', function() {
			var row = $('.requestRow').first();
			row.find('.taskType').first().val("1");
			row.find('.selected').first().prop("checked", true).change();
			var results = [];
			validation.validatePage(false, resdErrors, {warning:(a) => results.push(a)});
			expect(results.indexOf("UNSAVED_TASK") > -1).to.equal(true);
			expect($('.save').first().val()).to.equal('Save Changes');
        });
    });


    describe('testing assessment validation', function() {
        it('fails an invalid assessment row', function() {
			var row = $('.requestRow').first();
			row.find('.taskType').first().val("");
            var result = validation.validateRow($('.requestRow').first());
            expect(result).to.equal(false);
        });

         it('passes a vaid assessment row', function() {
            var row = $('.requestRow').first();
            row.find('.taskType').first().val("1");
            var result = validation.validateRow(row);
            expect(result).to.equal(true);
        });


    })


     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		eventHandlers.addValidationOnRowChange();

    });
});
