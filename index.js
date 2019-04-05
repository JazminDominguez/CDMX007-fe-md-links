// module.exports = () => {
//   // ...
// };

const mdlinks = require('./main');


const parseData = () =>console.log('saludos');
mdlinks.validateExistingFile(mdlinks.processargv);
const filepath = mdlinks.relativeToAbsolute(mdlinks.documentPath);
mdlinks.read(filepath, parseData);


mdlinks.validateExistingFile(mdlinks.rute);

