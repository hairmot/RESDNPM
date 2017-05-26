var setGlobals = function setGlobals () {

	global.resdDialogs = {
		DUEIN24HOURS: {title: '24hourstitle', message:'24hoursmessage'},
		DELETE:  {title:"delete title", message: "delete message"},
		QUIT24HRCHECK : {title: "24HRCHECK title", message: "24HRCHECK message"},
		NAMEOFSTAFF : {title:"NAMEOFSTAFF title", message:"NAMEOFSTAFF message"}
	};

	global.resdErrors = {
		pleaseAccept: 'pleaseAcceptError',
		noValidTasks: 'noValidTasksError'
	}

	global.sitsDialogTitleReceived = '';
	global.sitsDialogMessageReceived = '';
	global.sitsDialogActionsReceived = [];
	global.sitsDialogClosedTitle = '';

	global.enhanced = 'Y';

	global.$ = {};
	global.$.post = function(url, data, callback) {callback()};
	global.$.ajax = function() {};
	global.$.get = function() {};


	global.sits_dialog = function(title, message,actions) {
		global.sitsDialogTitleReceived = title;
		global.sitsDialogMessageReceived = message;
		global.sitsDialogActionsReceived = actions;
		return {title: title};
	}

	global.sits_dialog_close = function(dialog) {
		global.sitsDialogClosedTitle = dialog.title;
	}

}

setGlobals();

module.exports = setGlobals;
