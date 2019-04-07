const express = require('express');
const router = express.Router();

router.get('/dummy', (req, res, next) => {
    res.send('<h1>ToDO</h1>');
  });

exports.routes = router;