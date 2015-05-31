var express = require('express');
var app = express();

// Página de respuesta
app.get('/respuesta', function (req, res) {
	var acierto = false;
	if (req.query.id == 'pregunta1'){
		if (req.query.respuesta.toUpperCase() === "COLÓN" || req.query.respuesta.toUpperCase() === "COLON" || req.query.respuesta.toUpperCase() === "CRISTOBAL COLÓN" || req.query.respuesta.toUpperCase() === "CRISTOBAL COLON" ) {
			acierto = true;
		}
		if (acierto) {
			res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
					+'	<h1>Quiz 2015</h1>'
					+'	<p>Respuesta correcta</p>'
					+'	<a href="/">Volver al menú principal</a>'
					+'</body></html>'
			);
		} else {
			res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
					+'	<h1>Quiz 2015</h1>'
					+'	<p>Respuesta incorrecta. La respuesta era Colón.</p>'
					+'	<a href="/">Volver al menú principal</a>'
					+'</body></html>'
			);
		}
	} else if (req.query.id == 'pregunta2'){
		if (req.query.respuesta.toUpperCase() === "LISBOA"){
			acierto = true;
		}
		if (acierto) {
			res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
					+'	<h1>Quiz 2015</h1>'
					+'	<p>Respuesta correcta</p>'
					+'	<a href="/">Volver al menú principal</a>'
					+'</body></html>'
			);
		} else {
			res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
					+'	<h1>Quiz 2015</h1>'
					+'	<p>Respuesta incorrecta. La respuesta era Lisboa.</p>'
					+'	<a href="/">Volver al menú principal</a>'
					+'</body></html>'
			);
		}
	} else{
		res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
				+'	<p>Los parámetros introducidos son incorrectos</p><a href="/">Volver al menú principal</a>'
				+'</body></html>'
		);
	}
});

// Página principal con preguntas
app.get('*', function (req, res) {
	res.send('<html><head><meta charset="utf-8"></meta><title>Quiz 2015</title></head><body>'
			+'	<h1>Quiz 2015</h1>'
			+'	<h2>Pregunta 1</h2>'
			+'	<form method="get" action="/respuesta">'
			+'		<p>¿Quién descubrió América?</p>'
			+'		<input type="text" name="respuesta"/>'
			+'		<input type="submit" value="Enviar"/>'
			+'		<input type="hidden" name="id" value="pregunta1"/>'
			+'	</form>'
			+'	<h2>Pregunta 2</h2>'
			+'	<form method="get" action="/respuesta">'
			+'	<p>¿Cuál es la capital de Portugal?</p>'
			+'		<input type="text" name="respuesta"/>'
			+'		<input type="submit" value="Enviar"/>'
			+'		<input type="hidden" name="id" value="pregunta2"/>'
			+'	</form>'
			+'</body></html>'
	);
});

app.listen(8000);