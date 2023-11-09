"use strict";

import { paths } from "../gulpfile.babel";

import gulp from "gulp";
import jsdoc from "gulp-jsdoc3";
 
gulp.task('docs', (cb) => {
    const config = require('./jsdocConfig.json');
    return gulp.src(paths.docs.src, {read: false})
        .pipe(jsdoc(config, cb));
});