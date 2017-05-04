var mocha = require('mocha');
var expect = require('chai').expect;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import charactersRemaining from '../src/shared/js/charactersRemaining';

describe("Characters Remaining Tests", function(){

    

    before(() => {
        const dom = new JSDOM(`    
        <div id="output">0</div>
        <textarea id="input" maxlength="10"></textarea>
        `);
        var $ = require('jquery')(dom.window);
        global.$ = $;
        charactersRemaining(10, "#input", "#output")
    
    });

    it("Updates on input", function(){
        $('#input').text('12345');
        $('#input').keyup();
        expect($('#output').html()).to.equal("5");
    });

    it("doesn't allow minus figures", function(){
        $('#input').text('12345678910');
        $('#input').keyup();
        expect($('#output').html()).to.equal("0");
    });

    it("trims input", function(){
        $('#input').text('123456789123345segegege10');
        $('#input').keyup();
        expect($('#input').text()).to.equal("1234567891");
    });
    
    
});
