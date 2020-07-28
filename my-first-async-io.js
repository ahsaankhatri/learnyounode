
const fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
    if (err) {
        return console.log(err);
    }

    let show = data.toString().split('\n');
    console.log(show.length-1);
})