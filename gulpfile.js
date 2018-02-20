var gulp = require("gulp"),
    server = require('gulp-server-livereload'),
    scss = require("gulp-scss"),
    prefix = require('gulp-autoprefixer'),
    concat = require("gulp-concat");
    
    
    //SERVER	
    gulp.task('serv', function() {
        gulp.src('./dist')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            open: true
        }));
    });

    //STYLES
    gulp.task('scss', function () {
        gulp.src([
            './src/styles/main.scss'
        ])
        .pipe(scss())
        .pipe(prefix({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/styles'));
    });

    //VIEWS
    gulp.task('views', function () {
        return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist/'));
    });

    //SCRIPTS
    gulp.task('scripts', function(){
        gulp.src([
            './src/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'));
    });

    gulp.task('watch', function(){
        gulp.watch('./src/**/*.scss', ['scss']);
        gulp.watch('./src/**/*.js', ['scripts']);
    });

    gulp.task('default', ['views', 'scss', 'scripts', 'serv', 'watch']);