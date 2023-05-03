const express = require('express');
const app = express();

app.get("/",(req,resp)=>{
    resp.send(`
        <h1>Welcome, to HomePage</h1> <a href="/about">Goto about page </a> <br>
        <a href="/help">Goto help page </a>
    `)
})

app.get("/about",(req,resp)=>{
    resp.send(`
        <h1>Welcome to about page</h1> <a href="/">Goto home page </a>
    `)
})

app.get("/help",(req,resp)=>{
    resp.send(`
        {name : 'Satyam Singh', email:'satyam@singh.com'};
        <br>
        <a href="/">Goto home page </a>
    `)
})

app.listen(5000);