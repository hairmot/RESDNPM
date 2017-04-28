import plUploader from '../shared/js/getPlUploader.js';

export default {
    init : function init() {
        this.waitForplUploader();
    },
    setEvidenceState: function setEvidenceState() {
		$('.evidence').each(function(i,e) {			
			if($("a[href*='SIW_FILE_LOAD']:contains('" + $(e).data('file') +  "')").length > 0)
			{
				$(e).find('.uploadEvidence').hide();
				$(e).find('.uploadedEvidence').show();
			}
			else
			{
				$(e).find('.uploadEvidence').show().find('.add').removeClass('sv-btn-success').addClass('sv-btn-block').val('Upload Work in Progress').prop('disabled',false);
				$(e).find('.uploadedEvidence').hide();
			}
		});
	},
    waitForplUploader: function waitForplUploader() {
        var _this = this;
        if(plUploader()) 
        {            
            plUploader().bind("PostInit", function() {
                _this.setEvidenceState();
                plUploader().bind("StateChanged", function() {
                    _this.setEvidenceState();
                });
                plUploader().bind("FilesRemoved", function() {
                    setTimeout(function() {_this.setEvidenceState()}, 300); 
                });
            });
        }
        else
        {
            setTimeout(function() {_this.waitForplUploader();}, 100);
        }
    }
}