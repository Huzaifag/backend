/* 
File Handling in Node.js
1.Writing to a file
2.Reading from a file
3.Appending to a file
4.Deleting a file
5.Create a folder
6.Delete a folder   
7.Read folder
*/

//1.Writing to a file
const fs = require('fs');
fs.writeFile('hello.txt','Hello World',(err)=>{
    if(err) throw err;
    console.log('File written successfully');
});

//2.Reading from a file
fs.readFile('./files/index.txt', (err, data)=>{
    if(err) throw err;
    console.log(data.toString());
})

//3.Appending to a file
fs.appendFile('hello.txt','Hello World',(err)=>{
    if(err) throw err;
    console.log('File appended successfully');
}); 

//4.Deleting a file
fs.unlink('hello.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted successfully');
}); 

//5.Create a folder
fs.mkdir('myfolder',(err)=>{
    if(err) throw err;
    console.log('Folder created successfully');
});

//6.Delete a folder
fs.rmdir('myfolder',(err)=>{
    if(err) throw err;
    console.log('Folder deleted successfully');
}); 

//7.Read folder
fs.readdir('myfolder',(err,files)=>{
    if(err) throw err;
    console.log(files);
}); 


