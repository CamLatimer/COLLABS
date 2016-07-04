var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var watchers = function() {
  gulp.watch(['./app/views/**/*.erb',
              './app/assets/templates/**/*.erb',
              './app/assets/javascripts/**/*.js'], ['reload']);
  gulp.watch(['./app/assets/stylesheets/**/*.scss'], ['reloadCSS'])
};

gulp.task('reload', function(){
  return browserSync.reload();
});

gulp.task('reloadCSS', function() {
  return browserSync.reload('*.css');
});

gulp.task('sync', function() {
  browserSync.init({
      proxy: 'localhost:3000',
      port: 3001,
      open: false,
      ui: {
        port: 3002
      }
  });

  watchers();
});

gulp.task('default', ['sync']);
