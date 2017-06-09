var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-GUIDANCE/validation';
import lcRadioPicker from '../htmlTemplates/lcRadioPicker';

describe("Guidance Validation Tests", function(){
    var $;


    describe('lc validation - valid', function() {



        it('correctly detects whether to run learning contract radio validation', function() {
            expect(validation.applyToggleCheck()).to.equal(true);
        });

        it('renders the submit button as disabled when a selection has not been made',function(){
            validation.initToggleCheck();
            expect($('input[value="Next"]').first().prop('disabled')).to.equal(true);
        });

		it('enables the next button when a selection is made',function(){

			$('input[data-applylc]').first().prop('checked', true);
			validation.initToggleCheck();
            expect($('input[value="Next"]').first().prop('disabled')).to.equal(false);
        });

    });

    before(() =>{
        var dom = new JSDOM(lcRadioPicker);
        $ = require('jquery')(dom.window);
        global.$ = $;
    })

});
