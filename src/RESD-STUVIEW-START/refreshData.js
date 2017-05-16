export default  function refreshData() {
	$.get($('#openRequestsAjax').attr('href'), function(rows) {
		if(rows.indexOf('requestRow') === -1) {
			$('#newRequest').show();
			$('#openRequests').hide();
		}
		else {
			$('#newRequest').hide();
			$('#openRequests tbody').html(rows);
			$('#openRequests').fadeIn();
		}
	});
}
