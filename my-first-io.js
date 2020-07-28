
const fs = require('fs');

let fPath = process.argv[2];

let h = fs.readFileSync(fPath);

h = h.toString().split('\n');

console.log(h.length-1);