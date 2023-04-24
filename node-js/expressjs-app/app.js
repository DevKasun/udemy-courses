const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This runs always");
    next();
});

app.use('/products', (req, res, next) => {
    console.log("Another middleware");
    res.send('<h1>Products</h1>');
});

app.use('/', (req, res, next) => {
    console.log("Another middleware");
    res.send('<h1>Hello Express</h1>');
});


app.listen(3000);

