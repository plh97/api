var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
const key  = [
    'ZrWdVHSSaLkfP6OdxM1RzZxPDE5gcnsf',
];
gulp.task('tinypng', function () {
    gulp.src('./public/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key,
            sigFile: 'public/image/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('image'));
});