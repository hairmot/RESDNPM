var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require( 'browserify');
var fs = require('fs');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');

gulp.task('build', function() {

	fs.readdirSync('./src/').filter(a => a.indexOf('RESD') > -1)
	.map(a => {
		var infile = './src/' + a + '/index.js';
		var outfile = './build/' + a + '.js';
		browserify([infile])
		.transform(babelify)
		.transform('browserify-css')
		.bundle()
		.pipe(fs.createWriteStream(outfile));
	})

});

gulp.task('minify', function() {
		fs.readdirSync('./build/').map(a => {
			console.log(a);
			gulp.src('./build/' + a)
			.pipe(uglify())
			.pipe(gulp.dest('./min/'))
		});
})

gulp.task('gzip', function() {
		fs.readdirSync('./min/').map(a => {
			gulp.src('./min/' + a)
			.pipe(gzip())
			.pipe(gulp.dest('./gzipped/'))
		});
});


gulp.task('default', ['build','watch']);

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.js','./src/**/*.css'], ['build']);
});

function onError(err) {
  console.log(err);
  this.emit('end');
}
