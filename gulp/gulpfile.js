const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function() {
  browserSync.init({
    server: './'
  });
  gulp.watch('lorem/*.scss', gulp.series('sass'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('lorem/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('serve'));
