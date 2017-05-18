var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import rowsSelected from '../../src/RESD-CREATE-ASSESSMENTS/rowsSelected';
import requestRow from '../htmlTemplates/requestRow';

describe("Assessments Validation Tests", function(){
    var $;


    describe('countRows', function() {


         it('counts rows that are checked', function() {
            var result = rowsSelected.validRowsSelected('#topLevel');
            expect(result).to.equal(1);
        });

		it('doesn\'t count rows that are unchecked', function() {
            $('.requestRow').first().find('.selected').prop('checked',false);
			var result = rowsSelected.validRowsSelected('#topLevel');
            expect(result).to.equal(0);
        });

		it('doesn\'t count a checked row if it is invalid', function() {
            $('.requestRow').first().find('.selected').prop('checked',true);
			$('.requestRow').first().find('.dissertation').first().val('');
			var result = rowsSelected.validRowsSelected('#topLevel');
            expect(result).to.equal(0);
        });
    })

	describe('updateCounters', function() {


		it('updates the display', function() {
			rowsSelected.updateCounters();
            expect($('#selectedRows').html()).to.equal('0');
        });

		it('updates the display with > 0', function() {
			$('.requestRow').first().find('.dissertation').first().val('Y');
			rowsSelected.updateCounters();
            expect($('#selectedRows').html()).to.equal('1');
        });

    });

     before(() => {
        var dom = new JSDOM(requestRow);
        $ = require('jquery')(dom.window);
        global.$ = $;

    });
});
