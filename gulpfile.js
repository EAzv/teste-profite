'use strict';

const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// Sass source and build paths
const sass_srcWatch = 'src/scss/**/*.scss';
const sass_buildDir = 'build/css';

// Babel source and build paths
const babel_srcWatch = 'src/js/**/*.js';
const babel_buildDir = 'build/js';

// default task
gulp.task('default', ['babel', 'sass'], function () {
	console.log(' Default task ');
});

// babel task
gulp.task('babel', function () {
	console.log(' Compiling Babel js ');
	return gulp.src(babel_srcWatch)
		.pipe(babel({
			plugins: ["@babel/plugin-transform-modules-amd"],
			presets: ['@babel/env']
		}))
		.on('error', (error)=> {
			console.log(error.toString());
		    this.emit('end');
		})
		.pipe(gulp.dest(babel_buildDir));
});


// sass Task
gulp.task('sass', function () {
	console.log(' Compiling sass ');
	return gulp.src(sass_srcWatch)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(sass_buildDir));
});

// watch tasks on file changes
gulp.task('watch', [], function() {
	gulp.watch(babel_srcWatch, ['babel']);
	gulp.watch(sass_srcWatch, ['sass']);
});



