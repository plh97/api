// https://tinypng.com/

const gulp = require('gulp');
const tinypng = require('gulp-tinypng-compress');
const key  = [
    'ce6924dfb264691c7c77441d6835ea1ed2a9a3b0',
];

gulp.task('tinypng', function () {
    gulp.src('./public/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key,
            sigFile: 'public/image/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('public/image'));
});