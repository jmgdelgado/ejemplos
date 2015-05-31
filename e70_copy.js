var fs = require ('fs');
 
//En caso de haber introducido menos de 4 parámetros, imprimir formato del comando y salir.
if( process.argv.length != 4){
    console.log("Syntax: node copy <orig> <dest>");
    process.exit();
}

fs.readFile(
  process.argv[2],
  function(err,data) {
    fs.writeFile(
	  process.argv[3],
	  data,
	  function(err) {
	    if (err) throw err;
		console.log('file copied');
	  }
	)
  }  
);
