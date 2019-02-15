const express = require('express');

const app = express();
/*
app.use((req, res, next) => {
    console.log('First middleware function');
    next();
});

app.use((req, res) => {
    res.send('<h1>Some response</h1>');
});
*/

app.use('/users',(req, res) => {
    res.send('<h1>Routed from "users"</h1>');
});

app.use('/',(req, res) => {
    res.send('<h1>Plain simple response</h1>');
});

app.listen(3000);
