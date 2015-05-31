var fs = require ('fs');
 
 
function mergeFiles(fich_ini,fich_final){
        fs.readFile(
            fich_ini,
            function(err,data) {
                fs.appendFile(
                    fich_final,
                    data,
                    function(err) {
						if (err) throw err;
                        console.log('files appended');
                    }
                    );
            }
            );
}

//En caso de haber introducido menos de 4 parámetros, imprimir formato del comando y salir.
if( process.argv.length < 4){
    console.log("Syntax: node merge.js <dest> <f1> <f2> .. <fn>");
    process.exit();
}

// Recorrer todos los archivos siendo el destino final el primer fichero
for (var i=3; i<process.argv.length;i++){
    mergeFiles(process.argv[i],process.argv[2]);
}
