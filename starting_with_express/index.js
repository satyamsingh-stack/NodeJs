const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send("Welcome, to Home Page");
})

app.get('/About',(req,resp)=>{
    resp.send("Welcome, to About Page");
})

app.get('/Help',(req,resp)=>{
    resp.send("Welcome, to Help Page");
})

app.listen(5000);