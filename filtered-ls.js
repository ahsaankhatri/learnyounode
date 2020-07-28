const fs = require('fs');
const path = require('path');

let fPath = process.argv[2];

let exten = '.' + process.argv[3];

fs.readdir(fPath, function (err, files) {
    if (err)
    {
        return console.log(err);
    }

    for (i = 0; i < files.length; i++) {
        if (path.extname(files[i]) === exten)
        {
            console.log(files[i]);
        }
        else{}
    }
})