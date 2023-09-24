const { getMultiplica } = require('./helpers/multiplicar')
const argv = require('./config/yargs');



//1.- Limpiamos la consola en general
console.clear();


getMultiplica(argv.b, argv.l)
 .then(res => console.log(res))
 .catch(err  => console.log(err));


