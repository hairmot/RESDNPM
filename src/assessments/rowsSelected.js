export default {
    
    updateSectionRowsSelected: function updateSectionRowsSelected() {
        var _this = this;
        $('#accordion > div').each(function(i,e) {
            _this.updateRowsSelected($(e), $(e).prev().find('.sectionSelectedRows'));
        });	
    }, 

    updateRowsSelected: function updateRowsSelected(element, outputSelector) {
        $(outputSelector).html(this.validRowsSelected(element));
    },    

    validRowsSelected: function validRowsSelected(element) {
        var count = 0;
        $(element).find('.requestRow').each(function(i,e) {		
            if($(e).find('.save').hasClass('sv-btn-success') || $(e).find('.save').hasClass('sv-btn-primary'))
            {
                if($(e).find('.selected').first().prop('checked'))
                {
                    count++;
                }
            }
        });
        return count;
    }
}