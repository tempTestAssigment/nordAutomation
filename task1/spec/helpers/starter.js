const fs = require('fs')

const deleteFolderRecursive = function (path) {
    console.log('Before starting test cases removing OUTPUT folder')
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + '/' + file
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    }
    console.log('/output deleted')
}
deleteFolderRecursive('output/allure-results')
