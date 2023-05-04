const express = require('express');
const app = express();

const requireFilter = (req,resp,next)=>{
    if(!req.query.age)
        resp.send("Enter age in the url");
    else if(req.query.age<18)
        resp.send("Not Allowed to see this page");
    else 
        next();
}

app.get("/",(req,resp)=>{
    resp.send("Welcome To Home Page");
})

app.get("/about",requireFilter,(req,resp)=>{
    resp.send("Welcome to About Page");
})

app.listen(5000);