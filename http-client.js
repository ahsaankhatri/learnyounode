const http = require('http');

let url = process.argv[2];

http.get(url, function(response){

    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('Error Accured!', console.error);

}).on('Error Accured!', console.error);