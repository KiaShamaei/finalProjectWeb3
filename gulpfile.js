
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

//////////////////////////////////////////////////////////////

const inputs = {
    sassPath: './.gitignore/src/scss/**/*.scss',
    jsPath: './.gitignore/src/js/**/*.js',
    
};
const outputs = {
    cssPath: 'dist/css',
    jsPath: 'dist/js',
    
}

/////////////////////////////////////////////////////////////

function sassTask() {
    return src(inputs.sassPath)
        .pipe(sass())
        .pipe(dest(outputs.cssPath))
        .pipe(browserSync.stream());
}

function jsTask() {
	return src(inputs.jsPath)
    // Transpile the JS code using Babel's preset-env.
    .pipe(babel())
	.pipe(dest(outputs.jsPath))
}

function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch([inputs.sassPath,inputs.jsPath], parallel(sassTask,jsTask));
    watch('./**/*.html').on('change', browserSync.reload);

}

exports.default = series(parallel(sassTask,jsTask),watchTask)