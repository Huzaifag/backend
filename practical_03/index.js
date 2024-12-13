const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { render } = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
  fs.readdir(`./files`, function(err, files){
    res.render('index', {files : files});
  })
})

app.post('/create', function(req, res){
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details , function(err){
    res.redirect('/');
  })
})

app.get('/files/:filename', function(req, res){
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, fileData){
    res.render(`show`, {filename : req.params.filename, fileData: fileData});
  })
})

app.get('/edit/:filename', function(req, res){

  res.render('edit', {filename : req.params.filename});
})

app.post('/edit', function(req, res){
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}` , function(err){
    if(err){
      res.send(`failed due to: ${err}`)
    }else{
      res.redirect('/');
    }
  })
})

const port = 3000;

app.listen(port, ()=>{
  console.log(`Server is running at: localhost:${port}`);
  
})