import plUploader from '../shared/js/getPlUploader.js'
import toastr from 'toastr';

export default {

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
            plUploader().addFile(this.files[0]);
            var id = $(this).attr('id');
            $(this).next().removeClass('sv-btn-default').addClass('sv-btn-success').val('Uploaded').prop('disabled',true);
            waitForSitsInputsToAppear(id);
        });
    }
}

function waitForSitsInputsToAppear(id)
{
    if($('.updesc').length > 0) {
        //populate the additional sits inputs to get data into DOC
        $('.updesc').val(id);
        $('.upnotes').val($('#mhdCode').html());
        $('.upkeyw').val($('#stuCode').html());
        plUploader().start();
    }
    else {
        setTimeout( function() {waitForSitsInputsToAppear(id)}, 100 );
    }
}