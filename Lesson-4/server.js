const http = require ('http');
const port ='3000';
const hostName = '127.0.0.1';



// http.createServer((req,res)=>{
//     res.end('server is created')

// }).listen('3000')

const server = http.createServer((req,res)=>{
    res.end('<h1>HOLA</h1>')

});
server.listen(port,hostName,()=>{
    console.log(`server is running on http://${hostName}: ${port}`);
})