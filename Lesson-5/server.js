const http = require('http');
const port  = '5000';
const hostName = '127.0.0.1';

const myServer = http.createServer((req,res)=>{
   res.writeHead(201,{'Content-Type': 'text/html'});
   res.write('<h1>Hola</h1>')
})
myServer.listen(port, hostName,()=>{
    console.log(`server is running on http://${hostName}:${port}`)
})