import plUploader from '../shared/js/getPlUploader.js'
import toastr from 'toastr';
import evidence from './evidence.js';

export default {
    init: function init() {
        this.bindFileUploaders();
        this.bindFileDeleters();
        this.bindFileViewers();  
    },
    bindFileUploaders : function bindFileUploaders() {
        this.addUploadHandlers();
        this.addFileHandlers();
    },
    bindFileDeleters : function bindFileViewers() {
        $('.deleteEvidence').on('click', function(e) {
            e.preventDefault();
            var id = $(this).data('file');
            $("a[href*='SIW_FILE_LOAD']:contains('" + id +  "')").closest('.sv-form-group').find('.rspdeleter').click();
        });
    },
    bindFileViewers : function bindFileViewers() {
        $('.viewEvidence').on('click', function(e) {
            e.preventDefault();
            var id = $(this).data('file');
            $("a[href*='SIW_FILE_LOAD']:contains('" + id +  "')")[0].click();
        });
    },
    addUploadHandlers : function addUploadHandlers(){
        $('.add').on('click', function(e) {
            e.preventDefault();
            var uploader = plUploader();
            uploader.bind("UploadComplete", function() {
                $('input[data-continue]').prop('disabled',false).val('Continue');
                toastr.success('All files finished uploading');
            });
            uploader.bind("UploadFile", function() {
                $('input[data-continue]').prop('disabled',true).val('Files Uploading');
                toastr.info('Files uploading');
            });
            $(this).prev().click();
        });
    },

    addFileHandlers: function addFileHandlers() {
        var _this = this;
        $('.fileBrowse').on('change',function() {
            var id = $(this).attr('id');
            plUploader().addFile(this.files[0], id + this.files[0].name.substring(this.files[0].name.lastIndexOf('.')));          
            $(this).next().removeClass('sv-btn-default').addClass('sv-btn-success').val('Uploaded').prop('disabled',true);
            waitForSitsInputsToAppear(id);
        });
    }
}

function waitForSitsInputsToAppear(id)
{
    if($('.updesc').length > 0) {
        //populate the additional sits inputs to get data into DOC
        $('.upname').val(id);
        $('.updesc').val(id);
        $('.upnotes').val($('#mhdCode').html());
        $('.upkeyw').val($('#stuCode').html());
        plUploader().start();
    }
    else {
        setTimeout( function() {waitForSitsInputsToAppear(id)}, 100 );
    }
}