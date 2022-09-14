const { src, dest } = require("gulp");

//Конфигурация
const path = require("..//config/path.js");
const app = require("..//config/app.js");


// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");




// Обработка HTML
const html = () => {
	return src(path.html.src)
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(size({ title: "Before min" }))
		.pipe(htmlmin(app.htmlmin))
		.pipe(size({ title: "After min" }))
		.pipe(dest(path.html.dest))
}


module.exports = html;