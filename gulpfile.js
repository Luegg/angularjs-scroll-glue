'use strict';

var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var del = require('del');

var paths = {
  scripts: 'src/*.js'
};

/**
 * Clean the dist folder.
 */
gulp.task('clean', function (next) {
  del('dist', next);
});

/**
 * Minify and copy to dist folder.
 */
gulp.task('minify', ['clean'], function () {
  return gulp.src(paths.scripts).
  pipe(sourcemaps.init()).
  pipe(uglify()).
  pipe(sourcemaps.write()).
  pipe(rename({
    extname: '.min.js'
  })).
  pipe(gulp.dest('dist/'));
});

/**
 * Beautify and copy to dist folder.
 */
gulp.task('beautify', ['minify'], function () {
  return gulp.src(paths.scripts).
  pipe(uglify({
    mangle: false,
    compress: false,
    output: {
      bracketize: true,
      indent_level: 2,
      beautify: true
    }
  })).
  pipe(gulp.dest('dist/'));
});

gulp.task('build', ['beautify']);

/**
 * Watch for file changes.
 */
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['build']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'build']);
