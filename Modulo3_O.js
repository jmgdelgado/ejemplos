// Cargar el Módulo que gestiona el Sistema de Ficheros
var fs = require("fs");
var rs, ws;

// Comprobar parámetros. Como mínimo se requiere el nombre del 
// fichero de destino y un fichero de origen.
if (process.argv.length < 4) {
	console.log('  Sintaxis: "node concatenarFicheros <destino> <fichero1> [<fichero2] ..  [<ficheron]');
	process.exit();
};

// Creamos el Stream de escritura para crear siempre el fichero de destino.
// Si existe, será reemplazado.
ws = fs.createWriteStream(process.argv[2]);

// Por cada fichero pasado como parámetro añadirlo al de Destino.
// Hay que tener en cuenta que 'pipe' funciona como Append.
for (var contador = 3; contador < process.argv.length; contador++) {
	console.log("Añadiendo fichero: " + process.argv[contador]);
	rs = fs.createReadStream(process.argv[contador]);
	rs.pipe(ws);
};
