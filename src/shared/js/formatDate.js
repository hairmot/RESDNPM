export default function formatDate(date) {
	var monthNames = [
		'Jan', 'Feb', 'Mar',
		'Apr', 'May', 'Jun', 'Jul',
		'Aug', 'Sep', 'Oct',
		'Nov', 'Dec'
	];

	var day = ('0' + date.getDate()).slice(-2);
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return day + '/' + monthNames[monthIndex] + '/' + year;
}
