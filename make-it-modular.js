
const myModule = require('./mymodule');

let fPath = process.argv[2];
let exten = process.argv[3];


myModule(fPath, exten , function (err, files) {
    if (err)
    {
        return console.log('Error Accured!', err);
    }

    files.forEach(function (file){
        console.log(file);
    })

})