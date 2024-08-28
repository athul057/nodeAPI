const http = require('http');

const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end("You are in home page..");
  return;
 }
 if (req.url === '/about') {
  res.end("You are in a about page....");
  return;
 }

 res.end('<h1>Oopss some erro happpend</h1><a href="/">Go Back</a>')
})
server.listen(5000);

///Every request will give us one response only...Other wise it will give us error....
//If js enginer sends back 2 response for one request it will give us some error....