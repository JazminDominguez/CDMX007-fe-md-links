//ejecuta el comando señalado en la linea de comando
//const args = require('minimist')(process.argv.slice(2));
//args['name'] //tutorial link: https://flaviocopes.com/node-cli-args/


// da lectura al archivo
let fs = require('fs');
const path = require('path');

function read() {
    fs.readFile(documentPath, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            console.log(data);
        }
    })
};

//codigo para el path del archivo
//identifica si el path es absoluto o relativo
//si es relativo lo vuelve absoluto y lo lee

let documentPath = ('./README.md')
let documentPathVerification = path.isAbsolute(documentPath);

function relativeToAbsolute(){
if (documentPathVerification ===! true){
    path.resolve(documentPath)
  console.log('ruta de archivo ahora es absoluta');
  read()
} else{
    console.log('no se pudo procesar')
}}


module.exports = documentPath, documentPathVerification, relativeToAbsolute();