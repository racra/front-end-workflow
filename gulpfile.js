'use strict';

// Modules
var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    cssLint = require('gulp-csslint'),
    lesshint = require('gulp-lesshint');

// Paths
var _src = 'src',
    _dist = 'dist',
    _html = _src + '/*.html',
    _less = _src + '/css/less',
    _css = _src + '/css';

// lint less
gulp.task('lint-less', function() {
  return gulp.src(_less + '/*.less')
    .pipe(lesshint())
    .pipe(lesshint.reporter())
    .pipe(lesshint.failOnError())
});

// compile less files
gulp.task('compile-less', function() {
  return gulp.src(_less + '/imports.less')
    .pipe(less())
    .pipe(rename("main.css"))
    .pipe(
      gulp.dest(_css)
    );
});

// lint css
gulp.task('lint-css', function() {
  return gulp.src(_css + '/main.css')
    .pipe(cssLint())
    .pipe(cssLint.formatter(
      require('csslint-stylish')))
});

gulp.task('default', function() {
  // place code for your default task here
});

// lint js and minify

// live reload changes to browser

// autoprefix css rules

// minify images

// make a coding server that updates with file changes