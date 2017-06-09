var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-ASSESSMENTS/validation';
import eventHandlers from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';


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
			expect(validation.validatePage(false, resdErrors, {warning:(a) => {}})).to.equal(false);
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

         it('passes a valid assessment row', function() {
            var row = $('.requestRow').first();
            row.find('.taskType').first().val("1");
            var result = validation.validateRow(row);
            expect(result).to.equal(true);
        });

		it('detects that a row is in a saved state', function() {
			expect(validation.saveButtonSavedState(`<div><button class="save sv-btn sv-btn-success"></button></div>`)).to.be.true;
			expect(validation.saveButtonSavedState(`<div><button class="save sv-btn sv-btn-default"></button></div>`)).to.be.true;
		});

		it('detects that a row is in an unsaved state', function() {
			expect(validation.saveButtonSavedState(`<div><button class="save sv-btn sv-btn-warning"></button></div>`)).to.be.false;
		});

		it('highlights an invalid selection on page save', function() {
			var row = $('.requestRow').first();
			row.find('.taskType').first().val("").keyup();
			row.find('.selected').first().prop('checked',true);
			var error = '';
			expect(validation.validatePage(false, resdErrors, {warning:(a) => {error = a}})).to.equal(false);
			expect(error).to.equal('INVALID_SELECTION');
        });

		it('highlights an unsaved row on attempted page save', function() {
			var row = $('.requestRow').first();
			row.find('.taskType').first().val("2");
			row.find('.selected').first().prop('checked',true);
			var error = '';
			console.log($('.requestRow .sv-mandatory').attr('class'));
			expect(validation.validatePage(false, resdErrors, {warning:(a) => {error = a}})).to.equal(false);
			expect(error).to.equal('UNSAVED_TASK');
			row.find('.selected').first().prop('checked',false);
			$('body').append('<div class="requestRow removeme"><input style="checkbox" class="selected" value="checked" checked /></div>');
			row.find('.save').addClass('sv-btn-warning');
			validation.validatePage(false, resdErrors, {warning:(a) => {error = a}});
			expect(error).to.equal('UNSAVED_TASK');
        });

		it('only pushes one error if one of two rows is fine', function() {
			var row = $('.requestRow').first();
			var errors = [];
			row.find('.save').removeClass('sv-btn-warning');
			var res = validation.validatePage(false, resdErrors, {warning:(a) => {errors.push(a)}});
			expect(errors.length).to.equal(1);
		})

		it('notifies user of missing evidence', function() {
			var row = $('.requestRow').first();
			row.find('.selected').prop('checked',true);
			$('.removeme').remove();
			row.find('.save').addClass('sv-btn-success');
			row.find('.add').parent().parent().css('display','block');
			var error;
			validation.validatePage(false, resdErrors, {warning:(a) => {error = a}});
			expect(error).to.equal('MISSING_EVIDENCE');
			global.staff = 'yes';
			var bypass = validation.validatePage(false, resdErrors, {warning:(a) => {error = a}});
			expect(bypass).to.be.true;
			global.staff = undefined;
        });
    })

    before(() => {
    	var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;
		eventHandlers.addValidationOnRowChange();
		setGlobals();


    });
});
