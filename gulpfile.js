'use strict';

// Modules
var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    jslint = require('gulp-jslint'),
    csslint = require('gulp-csslint'),
    lesshint = require('gulp-lesshint'),
    autoprefixer = require('gulp-autoprefixer');

var cfg = {
  root: 'src',
  dist: 'dist',
  src: {
    css: '/css',
    less: '/less',
    js: '/js',
    imgs: '/imgs'
  },
  dist: {
    css: '/css',
    js: '/js',
    imgs: '/imgs'
  }
};

// lint less
gulp.task('lint-less', function() {
  return gulp.src(cfg.root + cfg.src.css + cfg.src.less + '/*.less')
    .pipe(lesshint())
    .pipe(lesshint.reporter())
    .pipe(lesshint.failOnError())
});

// compile less files
gulp.task('compile-less', function() {
  return gulp.src(cfg.root + cfg.src.css + cfg.src.less + '/imports.less')
    .pipe(less())
    .pipe(rename("main.css"))
    .pipe(
      gulp.dest(cfg.root + cfg.src.css)
    );
});

// lint css
gulp.task('lint-css', function() {
  return gulp.src(cfg.root + cfg.src.css + '/main.css')
    .pipe(csslint())
    .pipe(csslint.formatter(
      require('csslint-stylish')))
});

// autoprefix css
gulp.task('prefix-css', function() {
  return gulp.src(cfg.root + cfg.src.css + '/main.css')
    .pipe(autoprefixer(
      { browsers: ['last 2 versions'] }
    ))
    .pipe(gulp.dest(cfg.root + cfg.src.css))
});

// lint js
gulp.task('lint-js', function() {
  return gulp.src(cfg.root + cfg.src.js + '/main.js')
    .pipe(jslint())
    .pipe(
      jslint.reporter('stylish'))
});

gulp.task('default', function() {
  // place code for your default task here
});

// minify js and css

// live reload changes to browser

// minify images

// make a coding server that updates with file changes