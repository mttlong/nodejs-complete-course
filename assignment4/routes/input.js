const express = require('express');


const router = express.Router();
const names = [];

router.get('/', (req, res, next) => {
    res.render('input', {
      pageTitle: 'Input Name',
      path: '/'
    });
  });

router.post('/add-users', (req, res, text) => {
    console.log(req.body.title);
    names.push(req.body.title);
    res.redirect('/users');
});

exports.routes = router;
exports.names = names;