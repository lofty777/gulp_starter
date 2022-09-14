const { src, dest} = require("gulp");

//Конфигурация
const path = require("..//config/path.js");
const app = require("..//config/app.js");

// Плагины
const gp = require("gulp-load-plugins")();



// Обработка Pug
const pug = () => {
	return src(path.pug.src)
		.pipe(gp.plumber({
			errorHandler: gp.notify.onError()
		}))
		.pipe(gp.pug(app.pug))
		.pipe(gp.webpHtml())
		.pipe(dest(path.pug.dest))
}


module.exports = pug;