const fs =  require('fs');
const http =  require('http');

let portNumber = process.argv[2];
let file = process.argv[3];

        http.createServer(function(req, res) {
            res.writeHead(200, { 'content-type' : 'text/plain' });
            
            fs.createReadStream(file).pipe(res);
            }).listen(portNumber);