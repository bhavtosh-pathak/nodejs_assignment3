import fs from 'fs';
let a = fs.readFile("inputasync.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})
let b = fs.readFileSync("inputsync.txt","utf-8");
    
    console.log(b);
