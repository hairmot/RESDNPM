global.resdDialogs = {'DUEIN24HOURS': {'title': '24hourstitle', 'message':'24hoursmessage'}, DELETE:  {title:"delete title", message: "delete message"}};

global.sitsDialogTitleReceived = '';
global.sitsDialogMessageReceived = '';
global.sitsDialogActionsReceived = [];
global.sitsDialogClosedDialog = '';


global.sits_dialog = function(title, message,actions) {
	global.sitsDialogTitleReceived = title;
	global.sitsDialogMessageReceived = message;
	global.sitsDialogActionsReceived = actions;
	return {title: title};
}

global.sits_dialog_close = function(dialog) {
	global.sitsDialogClosedDialog = dialog.title;
}

