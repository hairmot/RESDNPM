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
        `);
        var $ = require('jquery')(dom.window);
        global.$ = $;

    });

    it("invalidates a blank input", () => {
        validator.validateInputs([$('input').first()]);
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


});

