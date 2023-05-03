const express = require('express');
const app = express();

app.get("/",(req,resp)=>{
    console.log("Data Received from Browser is ->>>>>",req.query.name);
    resp.send("Welcome, to Home Page"+req.query.name); // URL on the browser is: http://localhost:5000/?name=satyam
})

app.get('/About',(req,resp)=>{
    resp.send("Welcome, to About Page");
})

app.get('/Help',(req,resp)=>{
    resp.send("Welcome, to Help Page");
})

app.listen(5000);