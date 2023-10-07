const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res)=>{

    const handleReadFile=(statusCode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{'Content-type': 'text/html'});
            res.write(data);
            res.end()
        })
    }



    if(req.url === '/'){
       handleReadFile(202,'index.html');
    }
    else if(req.url === '/about'){
       handleReadFile(202,'about.html')
    }
    else{
        handleReadFile(404,'error.html')
    }
})
server.listen(port, hostName,()=>{
    console.log(`server is running on http://${hostName}:${port}`)
})