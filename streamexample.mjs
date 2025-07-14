import fs from 'fs'
import Stream  from 'stream';

const readStream = fs.createReadStream('longtext.txt','utf-8')
const writeStream= fs.createWriteStream('copiedtext.txt');
let chunkscount=0;
readStream.pipe(writeStream);
readStream.on('data',(chunk)=>{
    chunkscount++;
    console.log(chunk);
    writeStream.write(chunk);
})
readStream.on('end',()=>{
    console.log(`${chunkcount}`);
    writeStream.end();
})
readStream.on('error',()=>{
    console.log("error occured");
    writeStream.end();
})
