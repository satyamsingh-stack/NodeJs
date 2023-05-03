const express = require('express');
const path = require('path');
const dirpath = path.join(__dirname,"public");
const app = express();

app.use(express.static(dirpath));

app.listen(5000);
