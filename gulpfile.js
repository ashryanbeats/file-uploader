var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function() {
    gulp.src('./app/assets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('reload', function() {
	gulp.src('./app/views/*.html')
		.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./app/assets/*.scss', ['sass']);
  gulp.watch('./app/views/*.html', ['reload']);
});