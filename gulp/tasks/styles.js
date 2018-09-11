var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('styles', function(){
	/*move the contents of css file from point styles.css to dest place using pipe*/
	return gulp.src('./app/assets/styles/styles.css')
	
	/*postcss function expects an array*/
	/*cssvars is helpful to add the value of vars ex:$mainBlue: #2f5572; value was added from styles.css to temp/styles.css*/
	/*autoprefixer automatically added required prefixes for 'columns'*/
	/*we can give 2 arguments as well,.pipe(postcss([cssvars, autoprefixer]))*/
	
	/*nested is used to create nested classes*/
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});