import plUploader from '../shared/js/getPlUploader.js';
import toastr from 'toastr';

var initPlUploadCheck = 0;

export default {
	bindFileDeleteButtons : function bindFileDeleteButtons() {
		$('.deleteEvidence').on('click', function(e) {
			e.preventDefault();
			var id = $(this).data('file');
			$('a[href*=\'SIW_FILE_LOAD\']:contains(\'' + id +  '\')').closest('.sv-panel').find('.rspdeleter').click();
			//$('[data-continue]').prop('disabled', !validation.validatePage(true));
		});
	},
	bindFileViewButtons : function bindFileViewButtons() {
		$('.viewEvidence').on('click', function(e) {
			e.preventDefault();
			var id = $(this).data('file');
			$('a[href*=\'SIW_FILE_LOAD\']:contains(\'' + id +  '\')')[0].click();
		});
	},
	bindFileUploadButtons : function bindFileUploadButtons(){
		$('.add').on('click', function(e) {
			e.preventDefault();
			if (initPlUploadCheck === 0)
            {
				initPlUpload();
				initPlUploadCheck++;
			}
			$(this).prev().val('');
			$(this).prev().click();
		});
	},

	bindHiddenFileInputs: function bindHiddenFileInputs() {
		$('.fileBrowse').on('change',function() {
			var id = $(this).attr('id');
			plUploader().addFile(this.files[0], id + this.files[0].name.substring(this.files[0].name.lastIndexOf('.')));
			$(this).next().removeClass('sv-btn-default').addClass('sv-btn-success progress progress-striped active').val('Uploading').prop('disabled',true);
			waitForSitsInputsToAppear(id);
		});
	}
};

function waitForSitsInputsToAppear(id)
{
	if($('.updesc').length > 0) {
		populateUploadFields(id);
	}
	else {
		setTimeout( function() {waitForSitsInputsToAppear(id);}, 100 );
	}
}

function populateUploadFields(id) {
	$('.upname').val(id + '~' + $('#mhdCode').html());
	$('.updesc').val(id);
	$('.upnotes').val($('#mhdCode').html());
	$('.upkeyw').val($('#stuCode').html());
	plUploader().start();
}

function initPlUpload() {
	var uploader = plUploader();
	uploader.bind('UploadComplete', function() {
	//	$('input[data-continue]').prop('disabled',false).val('Continue');
		toastr.success(resdErrors.filesUploaded);
		$.get($('.syncDocs').attr('href'), function() {});
	});
	uploader.bind('UploadFile', function() {
	//	$('input[data-continue]').prop('disabled',true).val('Files Uploading');
		toastr.info(resdErrors.filesUploading);
	});
}
