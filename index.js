//requiring  modules
const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');
const chalk = require('chalk');

//variables globales
let fileS = process.argv[2];
/*let anyFile = path.resolve(fileS);
let rute = path.normalize(anyFile)
*/
//


//flags del cli
const grab = (flag) => {
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index];
}

const validate = grab('--validate');
const stats = grab('--stats');
const vs = grab('--vs');

function validateExistingFile(fileS) {
  if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
    /*
} else if (process.argv[2] = validate || stats){
    console.log('Debes ingresar un archivo con extensión .md para analizar');
    process.exit(-1);
    */
  } else {
    return fileS

  }
} validateExistingFile(fileS)

//dentro de current working directory
let markdown = fs.readFileSync(fileS).toString();
//let readFileAsinc = async (fileS)=>{ await fs.readFile(fileS, 'utf-8')}
let links = markdownLinkExtractor(markdown);

//console.log(readFileAsinc(fileS))


const extractLinks = (links) => {
  links.forEach(function (link) {
    console.log(`URL: ${link}`)
  })
}


const readMD = (fileS) => {
  let fileExtName = path.extname(fileS);
  if (fileExtName === '.md' && !validate && !stats && !vs) {
    extractLinks(links)
  }
}
readMD(fileS)

const fetchData = (links) => {
  links.forEach(link => {
    fetch(link).then(res => {

      const status = res.status
      if (status === 200) {
        console.log(`link: ${chalk.blue(link)} status: ${chalk.green(status)} OK`)
      } else if (status === 404) {
        console.log(` link: ${chalk.blue(link)} status: ${chalk.red(status)} FAIL`)
      }
    })

  });
}


const validateOption = (fetchData) => {
  if (validate) {
    fetchData(links)
  } else {
    console.log(' Para acceder al detalle debe escribir --validate o --stats');
  }
}
validateOption(fetchData)

const validateStats = (links) => {
  if (vs) {
    let failLinks = 0;
    let okLinks = 0;
    let otherErrors = 0;

    links.forEach(link => {
      fetch(link).then(res => {

        const status = res.status
        if (status === 200) {
          for (let i = 0; i < links.length; i++) {
            okLinks++;
            console.log('Correct Links: ' + okLinks)
          }
        } if (status === 404) {
          for (let i = 0; i < links.length; i++) {
            failLinks++;
            console.log('Failed Links: ' + failLinks)
          }
        } 
          if (status !== 404 && 200) {
            for (let i = 0; i < links.length; i++) {
              otherErrors++;
              console.log('Unknown Errors: ' + otherErrors)
            }
           
          
           
          }
        
      })
    })
  }
}
validateStats(links)


const statsOption = (links) => {
  if (stats) {
    let total = 0;
    let repeated = 0;
    let unique = 0;

    for (let i = 0; i < links.length; i++) {
      total++;
      for (let j = i + 1; j < links.length; j++) {
        if (links[i] === links[j]) {
          repeated++;
        }
      }
    }
    unique = total - repeated;
    console.log('Total links: ' + total);
    console.log('Unique links: ' + unique);
    console.log('Repeated links: ' + repeated);


  }
}
statsOption(links)

