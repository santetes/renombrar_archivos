const fs = require ('fs')
const yargs = require ('./conf/yargs')

const content = fs.readdirSync('./archivos_originales')
const find = yargs.f
const replace = yargs.r


content.forEach((arch)=>{
  const archRename = arch.replace(find, replace)
  fs.renameSync(`./archivos_originales/${arch}`, `./archivos_renombrados/${archRename}` )
})


