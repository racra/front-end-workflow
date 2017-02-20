'use strict';

// Modules
var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    jslint = require('gulp-jslint'),
    csslint = require('gulp-csslint'),
    lesshint = require('gulp-lesshint'),
    autoprefixer = requisre('gulp-autoprefixer');

// Paths
var _src = 'src',
    _dist = 'dist',
    _html = _src + '/*.html',
    _less = _src + '/css/less',
    _css = _src + '/css',
    _js = _src + '/js';

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
    .pipe(csslint())
    .pipe(csslint.formatter(
      require('csslint-stylish')))
});

// autoprefix css
gulp.task('prefix-css', function() {
  return gulp.src(_css + '/main.css')
    .pipe(autoprefixer(
      { browsers: ['last 2 versions'] }
    ))
    .pipe(gulp.dest(_css))
});

// lint js
gulp.task('lint-js', function() {
  return gulp.src(_js + '/main.js')
    .pipe(jslint())
    .pipe(
      jslint.reporter('stylish'))
});

gulp.task('default', function() {
  // place code for your default task here
});

// lint js and minify

// live reload changes to browser

// autoprefix css rules

// minify images

// make a coding server that updates with file changes