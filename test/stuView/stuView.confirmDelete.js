var mocha = require('mocha');
var expect = require('chai').expect;
import setGlobals from '../aasits_function_mocks';

import {confirmDeleteNoResponse, confirmDeleteDeleteResponse} from '../../src/RESD-STUVIEW-START/confirmDelete';


describe("it kills the dialog box", function() {
	confirmDeleteNoResponse({title:"confirmDeleteNo"});
	expect(global.sitsDialogClosedTitle).to.equal('confirmDeleteNo');
})

describe("it fires the delete request", function() {
	$.get = function() {};
	confirmDeleteDeleteResponse({title:"confirmDeleteYes"});
	expect(global.sitsDialogClosedTitle).to.equal('confirmDeleteYes');
})
