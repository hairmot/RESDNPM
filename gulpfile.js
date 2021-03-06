var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require( 'browserify');
var fs = require('fs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserifycss = require('browserify-css')


gulp.task('build', function() {

	fs.readdirSync('./src/').filter(a => a.indexOf('RESD') > -1)
	.map(a => {
		var infile = './src/' + a + '/index.js';
		var outfile = './build/' + a + '.js';
		browserify([infile])
		.transform(babelify)
		.transform(browserifycss)
		.bundle()
		.pipe(fs.createWriteStream(outfile)).on('finish', function() {
			minify(outfile);

		});
	})
});

function minify(file) {
	gulp.src(file)
		.pipe(uglify())
		.pipe(rename({
            suffix: '.min'
        }))
		.pipe(gulp.dest('./build/'))
}


gulp.task('default', ['build','watch']);

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.js','./src/**/*.css'], ['build']);
});

function onError(err) {
  console.log(err);
  this.emit('end');
}
