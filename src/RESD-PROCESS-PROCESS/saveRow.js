import submitFormAsync from '../shared/js/submitFormAsync';

export default function saveRow(row) {
	var stage2Length = row.next().find('[data-extensionlength] option:selected').text().split(' ')[0];
	var data = [ row.data('task'),
		row.find('[data-decision] option:selected').val(),
		row.find('[data-extensionlength] option:selected').text().split(' ')[0],
		row.find('[data-extensionduedate]').val(),
		//stage 2
		stage2Length === 'Grant' ? '0' : stage2Length === 'Reject' ? 'R' : stage2Length,
		row.next().find('[data-extensionduedate]').val()
	];
	$('[data-ajaxdata]').val(data.join('~'));
	if(row.find('.sv-mandatory').length ===0 && row.next().find('.sv-mandatory').length ===0 )
	{
		submitFormAsync(() => {return true;});
	}
}
