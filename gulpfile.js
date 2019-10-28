'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

//compile 
gulp.task('sass', function () { 
	return gulp.src('app/scss/style.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('app/css')); 
});

//compile and watch 
gulp.task('watch', function() { return gulp.watch('app/scss/style.scss', ['sass']);});