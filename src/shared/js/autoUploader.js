export default function() {
	$('body').on('click', function() {
		Object.keys(uploader).map(a => uploader[a].bind('QueueChanged', () => uploader[a].start()));
	});
}
