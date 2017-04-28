import plUploader from '../shared/js/getPlUploader.js';

export default {
    init : function init() {
        var _this = this;
        setInterval(function() {_this.setEvidenceState()}, 500);
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
                    if(plUploader().state == 1)  
                    {    
                        $(e).find('.uploadEvidence').show().find('.add').removeClass('sv-btn-success').addClass('sv-btn-block').val('Upload Work in Progress').prop('disabled',false);
                        $(e).find('.uploadedEvidence').hide();
                    }
			}
		});
	}
}