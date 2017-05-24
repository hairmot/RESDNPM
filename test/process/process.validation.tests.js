var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-PROCESS-PROCESS/validation';
import process from '../htmlTemplates/process';

describe("process Validation Tests", function(){

	it('validates the page', function() {
		global.$.prototype.datepicker = function(name, opts) {};
		validation.validatePage();
		expect($('sv-mandatory').length).to.equal(0);
	});

    before(() =>{
        var dom = new JSDOM(process);
        $ = require('jquery')(dom.window);
        global.$ = $;
    })

});
