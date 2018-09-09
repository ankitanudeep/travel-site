var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hooray - you created a gulp class");
});

gulp.task('html', function(){
	console.log("Imagine something useful being done to your HTML file here.");
});

gulp.task('styles', function(){
	/*move the contents of css file from point styles.css to dest place using pipe*/
	return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html')
	});
	
	watch('./app/assets/styles/**/*.css', function(){
	gulp.start('styles');
	});
});
