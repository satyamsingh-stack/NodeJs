// Asynchronous Programming Language
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
const newfile = dirpath+"/Apple.txt";

// fs.writeFileSync(newfile,"The File is Related to Apple Component");

// fs.readdir(newfile,'utf8',(err,items)=>{
//     console.log(items);
// })

// fs.appendFile(newfile," Updated",(err)=>{
//     if(!err)
//         console.log("File is updated");
// })

fs.rename(newfile,dirpath+"/mango.txt",(err)=>{
    if(!err){
        console.log("File is renamed");
    }
})

// fs.unlinkSync(dirpath+"/mango.txt");