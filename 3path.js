const path = require('path');

const seperator = path.sep;
const rel = path.join('/', 'file', 'subFolder', 'file.txt');

console.log(rel);
console.log(seperator);

const abs = path.resolve(__dirname, 'file', 'subFolder', 'file.txt');
console.log(abs);