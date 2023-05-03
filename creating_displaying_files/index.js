const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');

for(let i=0;i<5;i++){
    fs.writeFileSync(dirpath+"/Hello"+i+".txt","Welcome this file");
}

fs.readdir(dirpath,(err,files) =>{
    console.log(files);
})