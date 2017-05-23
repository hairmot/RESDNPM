var mocha = require('mocha');
var expect = require('chai').expect;
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
import saveTask from '../../src/RESD-STUVIEW-START/eventHandlers';
import refreshData from '../../src/RESD-STUVIEW-START/refreshData';
import deleteRequest from '../../src/RESD-STUVIEW-START/deleteRequest';
import stuview from '../htmlTemplates/stuView';

describe('Student View', function() {
	var $;
	global.dialogCalled = false;
	global.resdDialogs = {DELETE:  {title:"delete title", message: "delete message"}};
	global.sits_dialog = function(title,message,actions) {
		global.dialogCalled = true;
	}

	it('Binds a delete function', function() {
		saveTask.deleteButtonClicked();
		$('#deleteRequest').click();
		expect(global.dialogCalled).to.equal(true);
	});

	it('deletes a request by performing an ajax call', function() {
		var getsCalled = 0;
		var hrefReceived = '';
		$.get = function(url, callback) {
			hrefReceived = url;
			getsCalled++;
		}
		deleteRequest('#deleteRequest');
		expect($('#deleteRequest').prop('disabled')).to.equal(true);
		console.log($('#deleteRequest').attr('href'));
		expect(getsCalled).to.equal(1);
		expect(hrefReceived).to.equal('delete');
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

    });
});
