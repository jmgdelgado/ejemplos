var express = require('express');
//var QS = require('queryString');
var app = express();

//app.use(bodyParser.urlencoded({extended: true}));
 

app.get('/preguntas', function (req, res) {
  res.send('<html><body>'
  		+	'<form method="get" action="/respuesta">'
  		+	'¿Quién descubrió América?: <br>'
  		+	'<input type="hidden" name="pregunta" value=1>'
  		+	'<input type="text" name="respuesta"><br>'
  		+	'<input type="submit" value="Enviar respuesta"><hr>'
  		+	'</form>'
  		+	'<form method="get" action="/respuesta">'
  		+	'¿Capital de Portugal?: <br>'
  		+	'<input type="hidden" name="pregunta" value=2>'
  		+	'<input type="text" name="respuesta"><br>'
  		+	'<input type="submit" value="Enviar respuesta">'
  		+	'</form>');
});

app.get('/respuesta', function (req, res) {
	var esCorrecto="CORRECTA";
	var solucion="";
	if(req.query.pregunta==="1"){
		if(!(/^(cristobal\s)?col[oó]n/i).test(req.query.respuesta)){	
			esCorrecto="INCORRECTA";
			solucion="La respuesta correcta es Cristobal Colón<br>";
		}
	}else if(req.query.pregunta==="2"){
		if(!(/^lisboa/i).test(req.query.respuesta)){
			esCorrecto="INCORRECTA";
			solucion="La respuesta correcta es Lisboa<br>";
		}
	}
  res.send('<html><body>'
  		+	'<h1>Tu respuesta ha sido ' + req.query.respuesta + ' y es ' + esCorrecto + '. <br>' + solucion + '</h1>'
  		+	'<a href="/preguntas">Volver a las preguntas</a>');
});
 
app.listen(8000);
console.log("Escuchando en el puerto 8000");
