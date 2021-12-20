const express = require ('express');
const path = require('path');
const bodyParser = require("body-parser");
let alert = require("alert");
const port = 2000;

const app = express();
const users = require("./users.json");

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'style')));

app.get('/', function(req, res){
    res.render('project3');
});
app.get('/game', function(req, res){
    res.render('game');
});
app.get('/login', function(req, res){
   res.render('login');
});
app.post('/login', (req, res) => {
  
    let username = req.body.username;
    let password = req.body.password;
  
  
    const user = users.find(
      (item) =>
        item.username === username &&
        item.password === password 
      
    );
    
    if (user) {
      res.status(200).redirect("http://localhost:2000/");
    } else {
        alert("I am an alert box!");
    }
  });
  

  app.listen(port, () => {
    console.log(`server work at http://localhost:${port}`)
});