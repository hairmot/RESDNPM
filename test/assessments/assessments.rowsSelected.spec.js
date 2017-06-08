var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import rowsSelected, {validRowsSelected, urs} from '../../src/RESD-CREATE-ASSESSMENTS/rowsSelected';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';

describe("Assessments Validation Tests", function(){
    var $;

    describe('countRows', function() {

         it('counts rows that are checked', function() {
            var result = validRowsSelected('#topLevel');
            expect(result).to.equal(1);
        });

		it('ignores counting rows with invalid save states', function() {
			$('.save').first().removeClass('sv-btn-default sv-btn-success');
            var result = validRowsSelected('#topLevel');
            expect(result).to.equal(0);
			$('.save').first().addClass('sv-btn-default');
        });

		it('updates a counter', function() {
            var result = urs(0, require('../htmlTemplates/singleValidRow'));
            expect(result).to.equal(0);
        });

		it('doesn\'t count rows that are unchecked', function() {
            $('.requestRow').first().find('.selected').prop('checked',false);
			var result = validRowsSelected('#topLevel');
            expect(result).to.equal(0);
        });

		it('doesn\'t count a checked row if it is invalid', function() {
            $('.requestRow').first().find('.selected').prop('checked',true);
			$('.requestRow').first().find('.dissertation').first().val('');
			var result = validRowsSelected('#topLevel');
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
		setGlobals();
    });
});
