const { src, dest} = require("gulp");

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const size = require("gulp-size");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");
 




// Обработка Image
const img = () => {
	return src(path.img.src)
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(size({ title: "Before min" }))
		.pipe(newer(path.img.dest))
		.pipe(webp())
		.pipe(dest(path.img.dest))
		.pipe(src(path.img.src))
		.pipe(newer(path.img.dest))
		.pipe(gulpif(app.isProd, imagemin(app.imagemin)))
		.pipe(size({ title: "After min" }))
		.pipe(dest(path.img.dest));
}

module.exports = img;