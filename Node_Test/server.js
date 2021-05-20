const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

app.get('/', function(req,res){
    res.render('index.html')
})

app.get('/about', function(req,res){
    res.render('about.html')
})

var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 10,
    password        :'',
    user            :'root',
    database        :'test',
    host: 'localhost',
    port            :'3306'
});

app.get('/db', function(req,res){
    
})