const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const userNames = require('./routes/users');
const inputName = require('./routes/input');
const temp = require('./routes/temp');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/temp', temp.routes);
app.use('/users',userNames.routes);
app.use(inputName.routes);

app.use((req, res, next) => {
    res.status(404).render('404',{ pageTitle: 'Page Not Found!!'});
});

app.listen(3000);