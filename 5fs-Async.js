const { readFile, writeFile } = require('fs');
readFile('./file/subFolder/file.txt', (err, res) => {
 if (err) {
  console.log(err);
  return;
 }
 const result1 = res;
 readFile('./file/subFolder/second.txt', (err, res) => {
  if (err) {
   console.log(err);
   return;
  }
  const result2 = res;
  writeFile('./file/subFolder/wrteAsync.txt', `My file contents are ${result1} and ${result2}`, (err, res) => {
   if (err) {
    console.log(err);
    return;
   }
   console.log("file wrote successfully...")
  })

 })

})