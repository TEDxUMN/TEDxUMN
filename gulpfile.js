var gulp = require('gulp');
var exec = require('child_process').exec;
var ghPages = require('gulp-gh-pages');

gulp.task('build', function (cb) {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('deploy', ['build'], function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages({
        'branch': 'master',
        'remoteUrl': 'git@github.com:TEDxUMN/tedxumn.github.io.git'
      }));
  });