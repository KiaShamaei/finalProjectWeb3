
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

//////////////////////////////////////////////////////////////

const inputs = {
    sassPath: '.gitignore/src/scss/**/*.scss',
    jsPath: '.gitignore/src/js/**/*.js',  
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
	
    // Stop the process if an error is thrown.
    .pipe(plumber())
    // Transpile the JS code using Babel's preset-env.
    .pipe(babel({
      presets: [
        ['es2015','es2017']
      ]
    }))
    // Save each component as a separate file in dist.
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