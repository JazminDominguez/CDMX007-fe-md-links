

// da lectura al archivo
let fs = require('fs');
const path = require('path');
//let chalk = require('chalk');
let processargv = (process.argv[2])

function read(filepath, callback) {
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            console.log(data);
            callback(data)
        }
    })
};

//codigo para el path del archivo
//identifica si el path es absoluto o relativo
//si es relativo lo vuelve absoluto y lo lee


//identifica si se ingresó documento a analizar, sino manda error
3


function validateExistingFile(processargv){
    if (process.argv.length <= 2) {
        console.log("Usage: " + __filename + " path/to/directory");
        process.exit(-1);
    
    } else{
        return processargv
        
    }
}

let documentPath = (validateExistingFile(processargv))

function relativeToAbsolute(filepath){
    let documentPathVerification = path.isAbsolute(filepath);

    if (documentPathVerification ===! true){
       return path.resolve(filepath)
    console.log('ruta de archivo ahora es absoluta');
    read()
    } else{
        return filepath
        console.log('no se pudo procesar')
    }
}

module.exports = { documentPath, relativeToAbsolute, read,processargv,validateExistingFile,}