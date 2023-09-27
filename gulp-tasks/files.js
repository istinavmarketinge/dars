"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("files", () => {
    return gulp.src(paths.files.src).pipe(gulp.dest(paths.files.dist));
});