import fs from 'fs';
let a = fs.writeFile("outputasync.txt","hello good morning",(err,data)=>{
    if(err) throw err;
    console.log("data written");
})
let b = fs.writeFileSync("outputsync.txt","write sync file",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
    
    console.log("yes written");
