var gulp = require('gulp')
  , rename = require('gulp-rename')

  , gutil = require('gulp-util')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')

  , runSequence = require('run-sequence')
var path = require('path');
var jsdoc = require("gulp-jsdoc");
 

/* All the files & folders that you want to watch and compile
   When you save a file, gulp compiles your project (if gulp is running) */

var watcher = gulp.watch(['index.js','./lib/**/*.js', './lib/*.js'], ['default'])
watcher.on('change', function(event) {
  console.log('File '+event.path+' was '+event.type+', running tasks...')
})


gulp.task('browserify', function() {
  return browserify({ entries: './index.js' })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('template.js'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('jsdoc', function() {
  gulp.src("./lib/**/*.js")
    .pipe(jsdoc('./api/',{
    path: 'ink-docstrap',
    systemName      : "Template.js",
    footer          : "Template.js",
    copyright       : "Ben Taylor &copy; 2015",
    navType         : "vertical",
    theme           : "flatly",
    linenums        : false,
    collapseSymbols : false,
    inverseNav      : false
  })) 
    
})

gulp.task('default', function(done) {
  runSequence('browserify','jsdoc', done)
})


