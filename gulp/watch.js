'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('watch', ['wiredep', 'styles'], function() {
    gulp.watch('app/assets/scss/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/partials/**/*.html', ['partials']);
    gulp.watch('app/views/**/*.html', ['views']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});