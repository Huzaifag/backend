## Authentication and Authorization
**Authentication**
User ko profile dene se pehle ye check karna h ki user hai kaun.
**Authorization**
Kis cheez ko karny k liye app premit ho aur kis cheez kokarny k liye app premit nhi ho
## Authentication explanation
Server har baar bhool jata hai k app ko ho , ab q k server bhool jata hai k aap kaun ho to har baar wo har kaam k liye aap se pooche ga aap kaun ho.
## Cookies and Session
sabse pehle hemain kuch cheezain seekhni hoongi
i. How to set Cookie
ii. How to get Cookie
iii. bcrypt kaise use karna hai for encryption and decryption
iv. JWT kia hai aur us main data kaise store karna hai aur us main se data kaise lete hai
## How to set Cookie
```javascript
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//set cookie
app.get('/', (req, res)=>{
  res.cookie('name', 'Huzaifa');
  res.send('Cookie is set');
});
//get cookie
app.get('/get-cookie', (req, res)=>{
  const name = req.cookies.name;
  res.send(`The name is ${name}`);
});
app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
});
```
## How to use bcrypt - for encryption

- bcrypt is a library for hashing passwords.
- Use bcrypt for encryption and decryption.
- Encryption is the process of converting plain text into cipher text.
- Decryption is the process of converting cipher text into plain text.
- [bcrypt](https://www.npmjs.com/package/bcrypt)

```javascript
const bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("password", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
```
## How to use bcrypt - for decryption
```javascript
const bcrypt = require('bcrypt');
bcrypt.compare("password", hash, function(err, result) {
    // result == true
});
```
## What is JWT

- JWT is a library for generating and verifying tokens.
- It is made up of three parts: Header(ALGORITHM & TOKEN TYPE), Payload(DATA), and Signature(HASHED PAYLOAD & SECRET KEY).
- [JWT](https://jwt.io/)
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

**How to use JWT**
```javascript
app.get('/', (req, res)=>{
  const token = jwt.sign({ email: 'huzaifa@gmail.com' }, 'secret');
  res.cookie('token', token);
  res.send('Token is set');
});
```
**How to verify JWT**
```javascript
app.get('/verify-token', (req, res)=>{
  const token = req.cookies.token;
  const decoded = jwt.verify(token, 'secret');
  res.send(`The email is ${decoded.email}`);
});
```

**Important Commands for installation**
```bash
npm install jsonwebtoken bcrypt
$ npm install cookie-parser
```
