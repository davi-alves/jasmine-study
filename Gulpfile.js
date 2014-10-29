var gulp = require('gulp');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(4000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('watch', function() {
  gulp.watch('dev/*.html', notifyLiveReload);
  gulp.watch('text/*.html', notifyLiveReload);
  gulp.watch('dev/scripts/*.js', notifyLiveReload);
  gulp.watch('test/spec/*.js', notifyLiveReload);
});

gulp.task('default', ['express', 'livereload', 'watch'], function() {

});
