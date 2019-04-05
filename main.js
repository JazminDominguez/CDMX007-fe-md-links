#!/usr/bin/env node

//requiring  modules
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');

//variables globales
let fileS = process.argv[2];
let anyFile = path.resolve(fileS);
let rute = path.normalize(anyFile)
let fileExtName = path.extname(rute);


const grab = (flag) => {
    let index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index];
}
//flags del cli
const validate = grab('--validate');
//const stats = grab('--stats');


function validateExistingFile(rute) {
    if (process.argv.length <= 2) {
        console.log("Usage: " + __filename + " path/to/directory");
        process.exit(-1);

    } else {
        return rute

    }
}


//dentro de current working directory
let markdown = fs.readFileSync(rute).toString();
let links = markdownLinkExtractor(markdown);

if (fileExtName === '.md') {
    links.forEach(function (link) {
        console.log(`URL: ${link}`);
    })
}


//validate
if (validate) {
   links.forEach(function (link) {
        fetch(link)
            .then(res => {
                let URL = link;
                let ok = res.ok;
                let status = res.status;
                let statusText = res.statusText;
                console.log(` ${URL} ${ok} ${status} ${statusText}`);
            });
    })
} else {
    console.log('Debe escribir --validate o --stats o --validate --stats');
}

/* stats
if (stats) {

        links.forEach(function (link) {
            fetch(link)
                .then(res => {
                    let array =[]
                    let linkStatus = res.status;
                    if( linkStatus === 200){
                        array.push(linkStatus)


                    }
                    console.log(array)
                    return array

                });

        })


} else {
    console.log(`Welcome ${validate}, ${stats}`);
}*/