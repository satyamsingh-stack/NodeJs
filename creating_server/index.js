//http module handles the request and response 
const app = require('http');
app.createServer((req,resp)=>{
    resp.write("<h1>Hello Satyam Singh</h1>");
    resp.end();
}).listen(4500);