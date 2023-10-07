const fs = require('fs');
// fs.writeFile('demo.text', 'my name is arzena',function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('successful')
//     }
// })


fs.writeFile('demo.text','here use arrow function and writeFile override with new content. ',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('successful');
    }
});

fs.appendFile('demo.text','appendFile does not override existing file just add new file or content',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('successful');
    }
});

fs.readFile('demo.text','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

fs.rename('demo.text','renamedemo.text',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('rename succeeded')
    }
})

// fs.unlink('renamedemo',(err)=>{
//    if(err){
//     console.log(err)

//    } 
//    else{
//     console.log('delete file successfully')
//    }
// })


fs.exists('renamedemo',(result)=>{
    if(result){
        console.log('found')
    }
    else{
        console.log('not found')
    }
})