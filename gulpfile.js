// TODO: Autoprefixer, min
var gulp = require('gulp');
var sass = require('gulp-sass');

// SCSS / SASS
gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// Default
gulp.task('default', function() {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
});