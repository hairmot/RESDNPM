import plUploader from '../shared/plUpload.js'

export default {

    addUploadHandlers : function addUploadHandlers(){
        $('.add').on('click', function(e) {
            e.preventDefault();
            Object.keys(uploader).map(a => uploader[a])[0].bind("UploadComplete", function() {
                $('input[data-continue]').prop('disabled',false).val('Continue');
                toastr.success('All files finished uploading');
            });
            Object.keys(uploader).map(a => uploader[a])[0].bind("UploadFile", function() {
                $('input[data-continue]').prop('disabled',true).val('Files Uploading');
                toastr.info('Files uploading');
            });
            $(this).prev().click();
        });
    },

    addFileHandlers: function addFileHandlers() {
        $('.fileBrowse').on('change',function() {
            var pageUploader = Object.keys(uploader).map(a => uploader[a])[0];
            pageUploader.addFile(this.files[0]);
            var id = $(this).attr('id');
            $(this).next().removeClass('sv-btn-default').addClass('sv-btn-success').val('Uploaded').prop('disabled',true);
            waitForInputs(id);
        });
    }, 

    waitforInputs: function waitForInputs(id)
    {
        if($('.updesc').length > 0)
        {
            $('.updesc').val(id);
            $('.upnotes').val($('#mhdCode').html());
            Object.keys(uploader).map(a => uploader[a])[0].start();
        }
            else
        {
            setTimeout( function() {waitForInputs(id)}, 100 );
        }
    }
}