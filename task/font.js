const { src, dest} = require("gulp");

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

 

console.log(path.font.src)
console.log(path.font.dest)


// Обработка Font
const font = () => {
	return src(path.font.src)
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		//.pipe(newer(path.font.dest))
		.pipe(fonter(app.fonter))
		.pipe(dest("./public/font/"))
		//.pipe(ttf2woff2())
		//.pipe(dest(path.font.dest));
}

module.exports = font;