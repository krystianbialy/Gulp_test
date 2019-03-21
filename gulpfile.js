//===== VARIABLES =====
const gulp = require('gulp');
const sass = require('gulp-sass');

//===== TASKS =====
gulp.task('sass', () => {
  return gulp.src('./sass/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
