var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/preguntas', function(req, res){
    res.send('<html><body>'
			+'<h1>Preguntas</h1>'
			+'<br>'			
				+'<form method="post" action="/respuesta">'
					+'<input type="hidden" name="id" value="1"/><strong>¿Quién descubrió América?</strong><br>'
					+'<input type="text" name="respuesta1"/><br><input type="submit" value="Comprobar"/></form>'
				+'<br><br>'
				+'<form method="post" action="/respuesta">'
					+'<input type="hidden" name="id" value="2"/><strong>¿Capital de Portugal?</strong><br>'
					+'<input type="text" name="respuesta2"/><br><input type="submit" value="Comprobar"/></form>'			
			+ '</body></html>');
});

app.post('/respuesta', function(req, res, next){
    
    if(req.body.id === '1'){
        if(req.body.respuesta1 === 'Cristóbal Colón'){
            res.send("<br>La respuesta <strong>" + req.body.respuesta1 + "</strong> es correcta.<br><br><br>"
                        + "<br><a href='/preguntas'>Volver al Inicio</a>");
        }else{
            res.send("<br> La respuesta <strong>" + req.body.respuesta1 + "</strong> es incorrecta.<br>  "
                        + "La respuesta correcta es <strong> Cristóbal Colón </strong>.<br><br><br> "
                        + "<br><a href='/preguntas'>Volver al Inicio</a>");
        }		
    }else{
        next();
    }    
});

app.post('/respuesta', function(req, res){
    
    if(req.body.respuesta2 === 'Lisboa'){
        res.send("<br>La respuesta <strong>" + req.body.respuesta2 + "</strong> es correcta.<br><br><br>"
                    + "<br><a href='/preguntas'>Volver al Inicio</a>");
    }else{
        res.send("<br>La respuesta <strong>" + req.body.respuesta2 + "</strong> es incorrecta.<br> "
                    + "La respuesta correcta es <strong>  Lisboa  </strong>.<br><br><br>"
                    + "<br><a href='/preguntas'>Volver al Inicio</a>");
    }
});

app.listen(8000);
console.log('Listening on port 8000');