var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../src/assessments/validation';
import requestRow from './htmlTemplates/requestRow';

describe("Validation Tests", function(){  
    var $;
   

    describe('testing assessment validation', function() {
        it('fails an invalid assessment row', function() {
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

    });
});