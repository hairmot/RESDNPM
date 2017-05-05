var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/guidance/validation';
import lcRadioPicker from '../htmlTemplates/lcRadioPickerNa';

describe("Guidance Validation Tests - not apply", function(){  
    var $;
    before(() =>{
        var dom = new JSDOM(lcRadioPicker);
        $ = require('jquery')(dom.window);
        global.$ = $;   
    })

    describe('lc validation - valid', function() {

        var dom = new JSDOM(lcRadioPicker);
        $ = require('jquery')(dom.window);
        global.$ = $;   

        it('correctly detects whether to run learning contract radio validation', function() {
            expect(validation.applyToggleCheck()).to.equal(false);
        });

    });


});