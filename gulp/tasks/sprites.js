var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');

var config = {
	mode: {
		css: {
			sprite: 'svg/sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {
		return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'))
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
	.pipe(gulp.dest('./app/assets/images/sprites'));
});

/*this task will have dependency on the createSprite task -- synchronized*/
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/assets/styles/modules'))
});

/*both these tasks will start together, sometimes it may cause inconsistency*
Hence we have added dependency in the second task copySpriteCSS to be dependent on
the first task createSprite to be completed*/
gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);