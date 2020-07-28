const net = require('net');

portNumber = process.argv[2];

let serv = net.createServer(function (socket){
    socket.end(getDate() + '\n');
})

serv.listen(portNumber);

function getDate() {

    let today = new Date();
    return[today.getFullYear(),
    formatNumber(today.getMonth() + 1),
    formatNumber(today.getDate())].join('-') +" "+

    [formatNumber(today.getHours()),
    formatNumber(today.getMinutes())].join(':'); 
}

function formatNumber(number){
    return number <10 ? "0" + number : number;
}
