var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import saveTask from '../../src/RESD-STUVIEW-START/eventHandlers';
import refreshData from '../../src/RESD-STUVIEW-START/refreshData';
import deleteRequest from '../../src/RESD-STUVIEW-START/deleteRequest';
import stuview from '../htmlTemplates/stuView';
import setGlobals from '../aasits_function_mocks';

describe('Student View', function() {
	var $;
	global.dialogCalled = false;


	it('Binds a delete function', function() {
		saveTask.deleteButtonClicked();
		$('#deleteRequest').click();
		expect(global.sitsDialogTitleReceived).to.equal('delete title');
	});

	it('Binds the open function', function() {
		saveTask.animatedButtonClicked(['#beginNewRequest', '#openRequest']);
		$('#openRequest').click();
		expect($('#openRequest').hasClass('progress-striped')).to.be.true;
	});

	it('Binds the begin function', function() {
		$('#beginNewRequest').parent().show();
		$('#beginNewRequest').click();

		expect($('#beginNewRequest').hasClass('progress-striped')).to.be.true;
	});

	it('deletes a request by performing an ajax call', function() {
		var getsCalled = 0;
		var hrefReceived = '';
		var callbackCalled = false;
		$.get = function(url, callback) {
			hrefReceived = url;
			getsCalled++;
			callback();
		}
		deleteRequest('#deleteRequest', function() {callbackCalled = true;});
		expect($('#deleteRequest').prop('disabled')).to.equal(true);
		expect(getsCalled).to.equal(1);
		expect(callbackCalled).to.be.true;
		expect(hrefReceived).to.equal('delete');
		callbackCalled = false;
		deleteRequest('#deleteRequest', 'no callback');
		expect(callbackCalled).to.be.false;
	});


	it('refreshes data and shows if data is returned', function() {
		//empty table data;
		$('#openRequests tbody').html('');

		var hrefReceived = '';
		$.get = function(href, callback) {
			hrefReceived = href;
			callback('requestRow');
		}
		refreshData();
		expect(hrefReceived).to.equal('ajaxurl');
		expect($('#openRequests tbody').html()).to.equal('requestRow');
		expect($('#openRequests').css('display')).to.not.equal('none');
	});


	it('refreshes data and hides request row if none returned', function() {
		//empty table data;
		$('#openRequests tbody').html('');

		$.get = function(href, callback) {
			callback('noreqs');
		}
		refreshData();

		expect($('#openRequests').css('display')).to.equal('none');
	});


     before(() => {
        var dom = new JSDOM(stuview);
        $ = require('jquery')(dom.window);
        global.$ = $;
		setGlobals();

    });
});
