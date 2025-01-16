// let interval = globalThis.setInterval(function () {
//     console.log('hello')
// }, 1000)

// globalThis.setTimeout(function () {
//     clearInterval(interval)
// }, 3000)

// console.log(__dirname)
// console.log(__filename)


// const age = require('./logger')
// console.log(age)


// var logger = require('./logger')
// logger.log('message')
// console.log(logger.url)

var { file_path, folder_path } = require('./logger')
console.log(file_path);
console.log(folder_path);

