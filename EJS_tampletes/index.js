const express = require('express');
const path = require('path');
const dirpath = path.join(__dirname,"public");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,resp)=>{
    resp.sendFile(dirpath+"/index.html");
})

app.get("/about",(req,resp)=>{
    resp.sendFile(dirpath+"/about.html");
})

app.get("/help",(req,resp)=>{
    resp.sendFile(dirpath+"/help.html");
})

app.get("/profile",(req,resp)=>{
    const user = {
        name:'Satyam Singh',
        email:'satyam.singh@gmail.com',
        skills:['C','C++','Python','JavaScript','Oops']
    }
    resp.render("profile",{user});
})

app.get("/login",(req,resp)=>{
    resp.render("login");
})

app.listen(5000);