
const fs = require('fs');
const path = require('path');

module.exports = function (fPath, exten , callback){

fs.readdir(fPath, function (err, files) {
    if (err)
    {
        return callback(err);
    }

    files = files.filter(function (file) {
        return path.extname(file) === '.' + exten;
    })
    callback (null, files);
})
}