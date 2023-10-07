const http = require('http');
const fs = require('fs')
const port = '3000';
const hostName ='127.0.0.1';

const server = http.createServer((req,res)=>{
    const handleReadFile = (statusCode, fileLocationName)=>{
        fs.readFile(fileLocationName, 'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.writeHead(statusCode,{'Content-Type': 'text/html'});
            res.write(data);
            res.end()

            }
            
        })
    }



  if(req.url === '/'){
    handleReadFile(202,'index.html')
   
  }
  else if(req.url === '/about'){
    handleReadFile(202, 'about.html')
  }
  else if(req.url === '/contact'){
    handleReadFile(202, 'contact.html')
  }
    
  else {
    handleReadFile(404, 'error.html')
  }
    
})
server.listen(port,hostName, ()=>{
    console.log(`server is running on http://${hostName}:${port}`);
})