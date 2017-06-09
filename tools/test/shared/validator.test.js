var mocha = require('mocha');
var expect = require('chai').expect;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import validator from '../../src/shared/js/validator';

describe("Validator Tests", function(){

    before(() => {
        const dom = new JSDOM(`
            <select>
                <option value="" selected>Please select</option>
                <option value="1">Valid Choice</option>
            </select>

            <input type="text" value="" />

			<div data-recpicker="">
              <div class="sv-checkbox">
			  	<label for="ANSWER.RECPICKER.MENSYS.1-1">
				  <input type="checkbox" name="ANSWER.RECPICKER.MENSYS.1-1" id="ANSWER.RECPICKER.MENSYS.1-1" value="12621600L16A~001" data-ttqseqn="2">
				  COURSEWORK (due 08/Jun/2017)
				</label>
			  </div>
            </div>
        `);
        var $ = require('jquery')(dom.window);
        global.$ = $;

    });

    it("invalidates a blank input", () => {
        validator.validateInputs([$('input').first()]);
        expect($('input.sv-mandatory').length).to.equal(1);
    });

	it("invalidates a whitespace input", () => {
		var inp = $('input').first();
		inp.val(' ');
        validator.validateInputs([inp]);
        expect($('input.sv-mandatory').length).to.equal(1);
    });

     it("validates a filled in input", () => {
        validator.validateInputs([$('input').first().val('yes')]);
        expect($('input.sv-mandatory').length).to.equal(0);
    });

    it("invalidates a select showing \"Please select\"", () => {
        validator.validateSelects([$('select option:selected').first()]);
        expect($('select.sv-mandatory').length).to.equal(1);
    });

    it("validates a valid select", () => {
        validator.validateSelects([$('select').first().val("1").find('option:selected').first()]);
        expect($('select.sv-mandatory').length).to.equal(0);
    });


    it("marks an invalid recpicker", () => {
        validator.validateRecordPicker($('[data-recpicker]').first());
        expect($('.sv-mandatory').length).to.equal(1);
    });

	it("validates a correct recpicker", () => {
		var picker = $('[data-recpicker]').first();
		picker.find('input[type="checkbox"]').first().prop('checked', true);
        validator.validateRecordPicker(picker);
        expect($('.sv-mandatory').length).to.equal(0);
    });


});

