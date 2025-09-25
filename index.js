const http  = require('node:http');
const path = require('path');
const fs = require('fs');

const port = 8080;
const folderPath = __dirname;

function getFilePath(filename){
  const filePath = path.join(folderPath,filename);
  return filePath;
}


const server = http.createServer();
server.on('request', (req, res) => {
  const url = req.url;

  switch(url){
    case '/':
      res.writeHead(302,{Location: '/index.html'});
      res.end();
      break;
    case '/index.html':
      fs.readFile(getFilePath('index.html'),(err,data)=>{
        if(err){
          res.writeHead(500, {'Content-type':'text/plain'});
          res.end("Error loading file");
        }else{
          res.writeHead(200, {'Content-type':'text/html'});
          res.end(data);
        }
      })
      break;
    case '/about.html':
      fs.readFile(getFilePath('about.html'),(err,data)=>{
        if(err){
          res.writeHead(500, {'Content-type':'text/plain'});
          res.end("Error loading file");
        }else{
          res.writeHead(200, {'Content-type':'text/html'});
          res.end(data);
        }
      })
      break;
    case '/contact-me.html':
      fs.readFile(getFilePath('contact-me.html'),(err,data)=>{
        if(err){
          res.writeHead(500, {'Content-type':'text/plain'});
          res.end("Error loading file");
        }else{
          res.writeHead(200, {'Content-type':'text/html'});
          res.end(data);
        }
      })
      break;
    default:
      fs.readFile(getFilePath('404.html'),(err,data)=>{
        if(err){
          res.writeHead(500, {'Content-type':'text/plain'});
          res.end("Error loading file");
        }else{
          res.writeHead(200, {'Content-type':'text/html'});
          res.end(data);
        }
      })
      break;
  }
});

server.listen(port);

