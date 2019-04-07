const express = require('express');
const router = express.Router();
const input = require('./input');


router.get('/', (req, res, next) => {
    res.render('users', {
      pageTitle: 'MAIN User\'s Page',
      names: input.names
    });
  });


exports.routes = router;