'use strict';

var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var markdox = require( 'gulp-markdox' );
var svgmin = require( 'gulp-svgmin' );
var svgstore = require( 'gulp-svgstore' );
var file = require( 'gulp-file' );
var inject = require( 'gulp-inject' );
var watch = require( 'gulp-watch' );


var project = '.';
var images = project + '/images/';
var patterns = project + '/_patterns/';


/**
 * # Gulp Commands
 *
 * Run them with ```gulp <command>```, e.g. ```gulp pl:dev```.
 */


/**
 * ## Icons
 */

/**
 * > icons
 *
 * Compiles all the SVG icons in the images/icons folder into a single font file.
 */
gulp.task( 'icons', function() {
  var iconsFileStr = '<div style="height: 0; width: 0; position: absolute; visibility: hidden"><!-- inject:svg --><!-- endinject --></div>';

  var svgs = gulp
    .src( images + 'icons/*.svg' )
    .pipe( svgmin() )
    .pipe( svgstore( { inlineSvg: true } ) );

  function fileContents( filePath, file ) {
    return file.contents.toString();
  }

  return file( patterns + 'atoms/images/_icons-include.twig', iconsFileStr, { src: true } )
    .pipe( inject( svgs, { transform: fileContents } ) )
    .pipe( gulp.dest( '.' ) );
} );

/**
 * > icons:watch
 *
 * Watch for changes to the SVG icons and trigger the icons job.
 */
gulp.task( 'icons:watch', function() {
  watch( images + 'icons/*.svg', function() {
    gulp.start( 'icons' );
  } );
} );


/**
 * ## Documentation
 */

/**
 * > docs
 *
 * Builds this documentation for the Gulp Commands.
 */
gulp.task( 'docs', function() {
  gulp.src( './gulpfile.js' )
    .pipe( markdox() )
    .pipe( rename( 'gulp-commands.md' ) )
    .pipe( gulp.dest( './docs' ) );
} );
