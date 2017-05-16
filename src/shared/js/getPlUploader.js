export default function() {
	return Object.keys(uploader).map(a => uploader[a])[0]; // eslint-disable-line
}
