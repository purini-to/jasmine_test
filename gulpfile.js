const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('default', () =>
  gulp.src('spec/test.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it 
    .pipe(jasmine())
);
