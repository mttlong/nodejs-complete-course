const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Dummy middleware, not useful for now just to illustrate the use of next
/*
app.use((req, res, next) => {
    console.log('In the middleware');
    url = req.url;
    next(); //so that can procede to the next middleware
});
*/

//app.use is for all http requests, regardless of method
//app.get is a filter for only GET methods
//app.post is a filter for only POST methods
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found.</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000);
