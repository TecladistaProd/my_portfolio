const fs = require('fs')
const path = require('path')

// fs.unlinkSync

let data = fs.readdirSync('./dist')

data = data.filter(i => !i.match(/git/g))

data.forEach(file => fs.unlinkSync(path.resolve('dist', file)))