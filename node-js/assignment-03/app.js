const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRouter);
app.use(homeRouter);


app.listen(3000);