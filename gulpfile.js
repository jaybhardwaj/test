/* use command to run this gulp or if you work current time then use gulp all:watch */

'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglifyjs');
var uglifyjs = require("gulp-uglify");
var concat = require('gulp-concat');
var image = require('gulp-image');
var sourcemaps = require('gulp-sourcemaps');
var fs = require('fs');
var header = require("gulp-header");
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var print = require('gulp-print');

//source and destination
const srcFolder='./public/output/';
const destFolder='./public/';
const srcCss=srcFolder+'css/*.css'; // minify css
const destCss=destFolder+'css'; // minify css
const srcJs=srcFolder+'js/*.js'; // Minify JS
const destJs=destFolder+'js'; // Minify JS
const srcConcat_js=srcJs; // concate js and Minify JS
const descConcat_js=destJs; // concate js and Minify JS
const combine_js_fname='combine.js'; //concat js file name
const srcConcat_script_wd_sourcemap=srcJs; // concat with sourcemap
const destConcat_script_wd_sourcemap=destJs; // concat with sourcemap
const combine_js_wd_srcmap_fname='all.js'; //concat with sourcemap file name
const srcImages=srcFolder+'images/*'; //compress images
const destImages=destFolder+'images';//compress images


// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('version.txt');
};
 
// Get copyright using NodeJs file system
var getCopyright = function () {
    return fs.readFileSync('copyright.txt');
};

// Make css using scss or convert scss into css
gulp.task('sass', function () {
  gulp.src('./public/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/output'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
});

// Minify CSS
gulp.task('minify-css', function () {
    gulp.src(srcCss)
        .pipe(print(function(filepath) {
            return "built: " + filepath;
          }))  
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(minify({keepBreaks: false}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destCss))
        /*.pipe(notify({message: 'css task complete'}))*/;
});
gulp.task('minify-css:watch', function () {
  gulp.watch(srcCss, ['minify-css']);
});

// Minify JS
gulp.task('minify-js', function () {
    gulp.src(srcJs) // path to your files
  .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(uglifyjs())
    .pipe(rename({
            suffix: '.min'
    }))
    .pipe(gulp.dest(destJs))
  /*  .pipe(notify({
      message: "Generated file: <%= file.relative %> @ <%= options.date %>",
      templateOptions: {
        date: new Date()
      }
    }))*/
});
gulp.task('minify-js:watch', function () {
  gulp.watch(srcJs, ['minify-js']);
});

// Minify JS into one take first file name
gulp.task('script', function() {
  gulp.src(srcJs)
   .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(uglify())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest(destJs))
    /*.pipe(notify({message: 'Minify JS into one task complete'}))*/;
});
gulp.task('script:watch', function () {
  gulp.watch(srcJs, ['script']);
});

// concate(combine) js and Minify JS
gulp.task('concat-script', function() {
     gulp.src(srcConcat_js)
    .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat(combine_js_fname))
    .pipe(uglify())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest(descConcat-js))
    .pipe(notify({message: 'concate(combine) js and Minify JS task complete'}));
});

gulp.task('concat-script:watch', function () {
  gulp.watch(srcConcat-js, ['concat-script']);
});

// concat(combine) with sourcemap
gulp.task('concat-script-with-sourcemap', function() {
     gulp.src(srcConcat_script_wd_sourcemap)
    .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
      .pipe(concat(combine_js_wd_srcmap_fname))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destConcat_script_wd_sourcemap))
    /*.pipe(notify({message: 'concat(combine) with sourcemap task complete'}))*/;
});

gulp.task('concat-script-with-sourcemap:watch', function () {
  gulp.watch(srcConcat_script_wd_sourcemap, ['concat-script-with-sourcemap']);
});

//compress images

gulp.task('image-compress', function () {  
    gulp.src(srcImages)
    .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(image({svgo: { enable: ["removeRasterImages"], disable:
      ["removeDoctype"] }}))     
      .pipe(gulp.dest(destImages))
      /*.pipe(notify({message: 'compress images task complete'}))*/;
})


gulp.task('image-compress:watch', function () {
  gulp.watch(srcImages, ['image-compress']);
});

// concat-copyright-version
gulp.task('add-copyright-version-js', function () {
     gulp.src(destJs+'/*.js')
     .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))  
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(header(getCopyright(), {version: getVersion()}))
    .pipe(gulp.dest(destJs))
    /*.pipe(notify({message: 'Copyright added task complete'}));*/
});
gulp.task('add-copyright-version-js:watch', function () {
  gulp.watch(destJs+'/*.js', ['add-copyright-version-js']);
});

// run combine gulp watch function
gulp.task('all:watch', ['minify-js:watch','minify-css:watch','image-compress:watch']);

//default fgulp function
gulp.task('default', ['minify-js','minify-css','image-compress']);

