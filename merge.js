
var fs = require('fs');


if (process.argv.length < 4 ) {
	console.log('syntaxis correcta : node merge.js <dest> <f1> <f2> .. <fn>');
	process.exit();
};

var writeStream = fs.createWriteStream(process.argv[2]);

for (var i = 3; i<process.argv.length ;i++){
	var readStream = fs.createReadStream(process.argv[i]);
	readStream.pipe(writeStream);
};