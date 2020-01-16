var gulp = require("gulp");
var sass = require("gulp-sass");
var nano = require("gulp-cssnano");
var rename = require("gulp-rename");

function compile() {
    return (
        gulp.src('src/utilitarian.scss')
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest('./dist/'))
    )
}

function minify() {
    return (
        gulp.src('dist/utilitarian.css')
            .pipe(nano())
            .pipe(rename('utilitarian.min.css'))
            .pipe(gulp.dest('./dist/'))
    )
}

exports.build = gulp.series(compile, minify);