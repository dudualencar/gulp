const gulp = require('gulp')
const babel = require('gulp-babel')
const uglifly = require('gulp-uglify')
const sass = require('gulp-sass')
const ugliflycss = require('gulp-ugliflycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


function appHTML(cb) {
    return gulp.src('src/**/*.html')
         .pipe(htmlmin({ conservativeCollapse: true}))
         .pipe(gulp.dest('build'))
}

function appCSS(cb) {
    return cb()
}

function appJS(cb) {
    return cb()
}

function appIMG(cb) {
    return cb()
}

module.exports ={
    appHTML,
    appCSS,
    appJS,
    appIMG
}