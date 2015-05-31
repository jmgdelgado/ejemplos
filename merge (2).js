/**
 * [Integra 1 o más ficheros en un solo fichero]
 * @params  {[String]} <f1> <f2> .. <fn>  [Nombre de los ficheros a copiar]
 * @param  {[String]} <dest> [Nombre del fichero destino]
 * @return {[void]}
 */

 //En caso de haber introducido menos de 4 parámetros, imprimir formato del comando y salir.
if(process.argv.length < 4)
{
    console.error('Sintaxis: node merge <dest> <f1> <f2> .. <fn>');
    process.exit();
}

// Se cargan las librerias necesarias
var fs = require('fs');

// Se gestiona el apuntador al flujo de salida, al fichero de destino
var ficheroDestino = fs.createWriteStream(process.argv[2].toString());

// Bucle que recorre el array de entrada de consola para buscar los ficheros de origen: <f1> <f2> .. <fn>
// Se inicia en i=3, dado que i = 2 es el valor del fichero de destino
for(var i = 3; i < process.argv.length; i++)
{
	// Se crea el apuntador al flujo de entrada para cada fichero a copiar
	// en cada iteracion del bucle y el flujo de entrada se redirige
	// con el 'pipe' al fichero de salida
    fs.createReadStream(process.argv[i].toString())
        .on('error', function(err)
        {
            console.error(' > ' + err);
        })
    .pipe(ficheroDestino);
}

// Manejador de error en el fichero de destino
ficheroDestino.on('error', function(err)
{
    console.error(' > ' + err);
});

// Manejador de cierre del ficheor de destino
ficheroDestino.on('finish', function()
{
    console.log('El proceso de concatenado ha terminado.');
});