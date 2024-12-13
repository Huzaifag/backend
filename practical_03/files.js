const fs = require('fs');

fs.writeFile('files/text.txt', '', function(err){
  if(err){
    console.log('Error');
  }else{
    console.log('Success');
    
  }
})