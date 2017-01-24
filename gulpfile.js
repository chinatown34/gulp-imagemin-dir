var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');
var imageop = require('gulp-image-optimization');
const image = require('gulp-image');

// Default Task
gulp.task('default', ['watch']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch('../porno_images/', ['images']);
});

// Отличный компресс но работает только на маке почему то
gulp.task('images', function(cb) {
    gulp.src(['../porno_images_old/**/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('../porno_images/')).on('end', cb).on('error', cb);
});


// Хуевый компресс вообще
// Compress Task
gulp.task('compress', function() {
    gulp.src('../porno_images/***/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../porno_images/'));

    gulp.src('../porno_images/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../porno_images/'));

    gulp.src('../porno_images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../porno_images/'));
});

// Compress Task big
gulp.task('compressbig', function() {

    gulp.src('../porno_images/**/big*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../porno_images/'));
});


//  Просто не работает
gulp.task('image', function () {
    gulp.src('../porno_images_old/**/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('../porno_images/'));
});

gulp.task('default', ['image']);


