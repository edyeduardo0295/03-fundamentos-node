const argv = require('yargs')
                   .option('b',{
                    alias: 'base',
                    demandOption: true,
                    type: 'number'
                   })
                   .option('l',{
                    alias: 'listar',
                    default: false,
                    type: 'boolean'
                   })
                   .check((argv,options)=>{
                      if(isNaN(argv.b)){
                        throw 'Error debe ser un numero';
                      }
                      return true;
                   })
                   .argv;

module.exports = argv;