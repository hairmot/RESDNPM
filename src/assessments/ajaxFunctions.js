export default {
    submitFormAsync :function submitFormAsync(done) {
        var formData = $('form').first().serialize() + '&NEXT.DUMMY.MENSYS.1=Next';
        $.post($('form').first().attr('action'), formData, function(data) {
            done();
        });
    }
}