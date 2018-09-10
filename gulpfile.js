var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browsersync = require('browser-sync').create();

gulp.task('default', function(){
	console.log("Hooray - you created a gulp class");
});

gulp.task('html', function(){
	browsersync.reload();
});

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

gulp.task('watch', function(){
	browsersync.init({
		/*notify: is optional parameter, if we don't want to see the notification after making a change to css file make it false*/
		/*tunnel: optional parameter, if we wish to get an URL for external devices in same wifi network*/
		/*tunnel: true will generate random url everytime, otherwise we can use a fixed string*/
		/*tunnel: 'ankitanudeep',*/
		notify: false,
		server: {
			baseDir: "app"
		}
			
	});
	
	watch('./app/index.html', function(){
		gulp.start('html')
	});
	
	watch('./app/assets/styles/**/*.css', function(){
	gulp.start('cssInject');
	});
});

/*The dependencies tasks ['styles'] will be first completed and have a chance to generate the temp/styles/styles.css file*/
/*After the generation of temp/styles/styles.css file, we will pipe in to the browsersync*/
gulp.task('cssInject', ['styles'], function() {
	/*whatever available to the pipe, will bring to the browser using stream function*/
	/*Benefit: browsersync is used to update the css changes without refreshing the whole page*/
	gulp.src('./app/temp/styles/styles.css').pipe(browsersync.stream());
});