//===== VARIABLES =====
const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass');

//===== TASKS =====
gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch('sass/*.scss', gulp.series('sass'));
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('serve'));
