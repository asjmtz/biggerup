var gulp = require('gulp')//require('gulp-help')(require('gulp'))
var webpack = require('gulp-webpack')
var named = require('vinyl-named')

// var watchUI = require('./lib/semantic/tasks/watch');
// var	buildUI = require('./lib/semantic/tasks/build');

// // import task with a custom task name
// gulp.task('watchUI', 'Watch Semantic UI', watchUI);
// gulp.task('buildUI', 'Build Semantic UI', buildUI);


var appList = ['main']


gulp.task('default', ['bundle'], function() {
    gulp.src( './index.html' )
        .pipe( gulp.dest( 'dist/' ) );
	console.log('done')
})

gulp.task('bundle', function() {
	return gulp.src(mapFiles(appList, 'js'))
		.pipe(named())
		.pipe(webpack(getConfig()))
		.pipe(gulp.dest('dist/'))
})

gulp.task('watch', ['default'],function() {
	return gulp.src(mapFiles(appList, 'js'))
		.pipe(named())
		.pipe(webpack(getConfig({watch: true})))
		.pipe(gulp.dest('dist/'))
})


/**
 * @private
 */
function getConfig(opt) {
	var config = {
		module: {
			loaders: [
				{ test: /\.vue$/, loader: 'vue'},
                {
                    test   : /\.(eot|woff|ttf|woff2|svg|jpg|png|gif)$/i,
                    loader : "file",
                },
                // {
                //     test   : /\.css$/i, 
                //     loader : "style-loader!css-loader?!"
                // },
			]
		},
        externals : {
            // "jquery" : "jQuery"
        },
		devtool: 'source-map',
		output : {
            publicPath        : './',
        },
	}
	if (!opt) {
		return config
	}
	for (var i in opt) {
		config[i] = opt[i];
	}
	return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
	return list.map(function (app) {return 'src/' + app + '.' + extname})
}
