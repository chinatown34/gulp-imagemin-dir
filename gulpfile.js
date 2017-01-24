var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

// Default Task
gulp.task('default', ['watch']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch('./*', ['compress']);
});

// Compress Task
gulp.task('compress', function() {
    gulp.src('../porno_images/***/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../porno_images/'));
});
