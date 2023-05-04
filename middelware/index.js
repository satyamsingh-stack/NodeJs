const express = require('express');
const app = express();

const requirefilter = (req,resp,next)=>{
    if(!req.query.age)
        resp.send("Please Enter Age in the URL");
    else if(req.query.age<18)
        resp.send("You are not allowed to see this page");
    else
        next();
}

app.use(requirefilter);

app.get("/",(req,resp)=>{
    resp.send("Welcome to Home Page");
})

app.get("/about",(req,resp)=>{
    resp.send("Welcome to about Page");
})

app.listen(5000);