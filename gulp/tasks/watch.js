var gulp = require('gulp');
var watch = require('gulp-watch');
var browsersync = require('browser-sync').create();

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
		browsersync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', function(){
	gulp.start('cssInject');
	});
    
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh')
    });
});

/*The dependencies tasks ['styles'] will be first completed and have a chance to generate the temp/styles/styles.css file*/
/*After the generation of temp/styles/styles.css file, we will pipe in to the browsersync*/
gulp.task('cssInject', ['styles'], function() {
	/*whatever available to the pipe, will bring to the browser using stream function*/
	/*Benefit: browsersync is used to update the css changes without refreshing the whole page*/
	gulp.src('./app/temp/styles/styles.css').pipe(browsersync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browsersync.reload();
});
