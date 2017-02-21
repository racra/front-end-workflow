'use strict';

// Modules
const gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    jslint = require('gulp-jslint'),
    csslint = require('gulp-csslint'),
    lesshint = require('gulp-lesshint'),
    autoprefixer = require('gulp-autoprefixer'),
    cmq = require('gulp-combine-mq'),
    browserSync = require('browser-sync').create();

const cfg = {
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
gulp.task('lint-less', () => {
  return gulp.src(cfg.root + cfg.src.css + cfg.src.less + '/*.less')
    .pipe(lesshint())
    .pipe(lesshint.reporter())
    .pipe(lesshint.failOnError());
});

// compile less files
gulp.task('compile-less', ['lint-less'],() => {
  return gulp.src(cfg.root + cfg.src.css + cfg.src.less + '/imports.less')
    .pipe(less())
    .pipe(rename("main.css"))
    .pipe(gulp.dest(cfg.root + cfg.src.css));
});

// lint css
gulp.task('lint-css', () => {
  return gulp.src(cfg.root + cfg.src.css + '/main.css')
    .pipe(csslint())
    .pipe(csslint.formatter(
      require('csslint-stylish')));
});

// autoprefix css
gulp.task('prefix-css', ['cmq'], () => {
  return gulp.src(cfg.root + cfg.src.css + '/main.css')
    .pipe(autoprefixer(
      { browsers: ['last 2 versions'] }
    ))
    .pipe(gulp.dest(cfg.root + cfg.src.css));
});

gulp.task('cmq', ['compile-less'], () => {
  return gulp.src(cfg.root + cfg.src.css + '/main.css')
    .pipe(
      cmq(
        { beautify: true }))
    .pipe(gulp.dest(cfg.root + cfg.src.css));
})

// lint js
gulp.task('lint-js', () => {
  return gulp.src(cfg.root + cfg.src.js + '/main.js')
    .pipe(jslint({
      "devel": true,
       "browser": true
    }))
    .pipe(
      jslint.reporter('stylish'));
});

// watch files
gulp.task('watch', ['serve'], () => {
  gulp.watch([
    cfg.root + cfg.src.css + cfg.src.less + '/*.less',
    cfg.root + cfg.src.js + '/main.js',
    cfg.root + '/*.html'
    ], ['css', 'js', 'reload']);
})

gulp.task('reload', ['css', 'js'], () => {
  browserSync.reload();
});

gulp.task('serve', () => {
  browserSync.init({
        server: {
          baseDir: cfg.root + '/',
        }
      });
});

gulp.task('default', ['css', 'js']);

gulp.task('server', ['serve', 'watch'])

gulp.task('css', ['lint-less', 'compile-less', 'cmq', 'prefix-css']);

gulp.task('js', ['lint-js']);

// minify js and css

// minify images

// copy html, css, js to dist - minify css and js
// minify imgs and past in dist