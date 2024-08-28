
//It is a Syncrounous Approach....
const { readFileSync, writeFileSync } = require('fs');

const path = require('path');
const filePath = path.join(__dirname, 'file', 'subFolder', 'file.txt');
console.log(readFileSync(filePath, 'utf8'))
const newPath = path.join('./', 'file', 'subFolder', 'second.txt');

writeFileSync(newPath, "hello world...");
writeFileSync('./file/subFolder/third.txt', "Hello it is a new File..", { flag: 'a' });