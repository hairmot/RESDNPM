var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import validation from '../../src/RESD-CREATE-CONFIRMATION/validation';
import confirmationPage from '../htmlTemplates/confirmationPage';
import setGlobals from '../aasits_function_mocks';

describe("Confirmation Validation Tests", function(){
    var $;

    it("returns both errors if no tasks and not accepted regs", function() {
		expect(validation({}, true).length).to.equal(2);
	});

	it("returns a not accepted error if the checkbox is not selected", function() {
		$('#container').append('<div class="requestRow"></div>');
		expect(validation({}, true).length).to.equal(1);
		var error = '';
		validation({warning: function(a) {error = a}}, false);
		expect(error).to.equal('pleaseAcceptError');
		error = '';
		$('[data-accept]').prop('checked', true);

		validation({warning: function(a) {error = a}});
		expect(error).to.equal('');

	});

    before(() =>{
        var dom = new JSDOM(confirmationPage);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();
    })

});
