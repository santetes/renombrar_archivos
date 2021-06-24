const yargs = require('yargs')
                              .option('f', {
                                alias : 'find',
                                demandOption : true,
                                type : 'string',
                                describe : 'Indica texto coincidente a reemplazar'
                              })
                              .option('r', {
                                alias : 'replace',
                                demandOption : true,
                                type : 'string',
                                describe : 'Indica el nuevo texto para el archivo'
                              }).argv


module.exports = yargs;