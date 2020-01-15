var gulp = require("gulp");
var sass = require("gulp-sass");

function build() {
    return (
        gulp.src('src/utilitarian.scss')
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest('./build/'))
    )
}
exports.build = build;