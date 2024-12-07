/*
=> important npm commands:

      npm init -y
      npm install nodemon
      npm install express
      npm list express
      npx nodemon index.js
      npm install ejs
      npm list ejs
*/

//Importing the express module

const express = require('express');
const app = express();
const path = require('path');

//Setting up the middleware/parsers for our forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setting up the static files
app.use(express.static(path.join(__dirname, 'public')));

//Setting up the view engine
app.set('view engine', 'ejs');

//Setting up the routes
app.get('/', (req, res) => {
    res.render('index');
});

//Dynamic route

app.get('/profile/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`<h1>Welcome ${username}</h1>`);
})

// server is running on port 3000
app.listen(3000, () => {
    console.log('Server is running on port localhost:3000');
});
