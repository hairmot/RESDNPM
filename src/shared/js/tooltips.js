export default {
	init : function init() {
			$('body').append('<div id="shadow" style="position:absolute;top:0;left:0;background-color:rgba(0, 0, 0, 0.2);pointer-events:none; z-index:5;width:100%;height:100%;display:none;"></div>');
		$('[data-content-tooltip-target]').hover(getContentToolTip, destroyContentToolTip);
		$(document).on('mousemove', function(e){
			$('#toolTip').css({
				left:  e.pageX,
				top:   e.pageY
			});
		});
	}
};

function getContentToolTip() {
	$('#shadow').show();
	var style = 'position:absolute;width:60%;min-width:120px;z-index:99;';
	var href = $(this).attr('href');
	switch($(this).attr('content-tooltip-target')) {
	case 'right':  style += 'transform:translate(4%, -40%)';break;
	case 'botttom':  style += 'transform:translate(-50%, -104%)';break;
	case 'top':  style += 'transform:translate(-50%, -4%)';break;
	default :
		style += 'transform:translate(-54%, -104%)'; break;
	}
	$('body').append('<div class="sv-hidden-sm sv-hidden-xs sv-hidden-md" id="toolTip" style="' + style + '"><img style="float:right;" class="loading" src="/images/working.gif"/></div>');

	if($('#toolTip').length > 0) {
		if(content.filter(a => a.href === href).length === 0)
		{
			$.get(href, function(data) {
				var html = $(data).find('[data-content-tooltip]');
				$(html).find('[data-content-tooltip-remove]').remove();
				content.push({href: href, html: html});
				$('.loading').remove();
				showToolTip(href);
			});
		}
		else {
			$('.loading').remove();
			showToolTip(href);
		}
	}
}
function showToolTip(href) {

	$('#toolTip').css('background-color','white').css('border','2px solid #621b40').html(content.filter(a=> a.href === href)[0].html);
}

var content = [];

function destroyContentToolTip() {
	$('#toolTip').remove();
	$('#shadow').hide();
}
