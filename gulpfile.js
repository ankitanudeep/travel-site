var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function(){
	console.log("Hooray - you created a gulp class");
});

gulp.task('html', function(){
	console.log("Imagine something useful being done to your HTML file here.");
});

gulp.task('styles', function(){
	/*move the contents of css file from point styles.css to dest place using pipe*/
	return gulp.src('./app/assets/styles/styles.css')
	
	/*postcss function expects an array*/
	/*cssvars is helpful to add the value of vars ex:$mainBlue: #2f5572; value was added from styles.css to temp/styles.css*/
	/*autoprefixer automatically added required prefixes for 'columns'*/
	/*we can give 2 arguments as well,.pipe(postcss([cssvars, autoprefixer]))*/
	
	/*nested is used to create nested classes*/
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html')
	});
	
	watch('./app/assets/styles/**/*.css', function(){
	gulp.start('styles');
	});
});
