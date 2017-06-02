var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import jquery from 'jquery';
import eventHandlers from '../../src/RESD-CREATE-ASSESSMENTS/eventHandlers';
import requestRow from '../htmlTemplates/requestRow';
import setGlobals from '../aasits_function_mocks';
import formatDate from '../../src/shared/js/formatDate';
import check24Hours  from '../../src/RESD-CREATE-ASSESSMENTS/check24Hours';

describe("Assessments Event handlers Tests - 24 hours branches", function(){
	var $;

	it("individual row handlers checks - not within 24 hours", function() {
		var result = false;
		eventHandlers.rowSaveCallback = function() {result = true;}
		eventHandlers.addIndividualRowSaveHandlers();
		$('.save').first().click();
		expect(result).to.be.true;
	});

	it("saves row if an fsst name is already provided", function() {
		var result = false;
		$('.dueDate').first().html(formatDate(new Date()));
		$('.selected').first().prop('checked',true);
		expect(check24Hours.validate24Hours($('.requestRow').first())).to.be.true;
		eventHandlers.rowSaveCallback = function() {result = true;}
		$('.save').first().click();
		expect(result).to.be.true;
	});

	it("individual row handlers checks in 24hrs - no fsst name provided so prompt", function() {
		$('.dueDate').first().html(formatDate(new Date()));
		$('.selected').first().prop('checked',true);
		$('[data-fsstname]').first().val('');
		expect(check24Hours.validate24Hours($('.requestRow').first())).to.be.true;
		$('.save').first().click();
		expect(global.sitsDialogTitleReceived).to.equal(global.resdDialogs.DUEIN24HOURS.title);
	});

	before(() => {
		var dom = new JSDOM(requestRow);
		$ = require('jquery')(dom.window);
		global.$ = $;
		setGlobals();

	});
});
