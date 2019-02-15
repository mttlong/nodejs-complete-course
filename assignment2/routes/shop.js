const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

//Every url starts with / so this is called despite any text after, unless another use() is defined
router.get('/',(req, res, next) => {    
    let shopPath = path.join(rootDir, 'views', 'shop.html');
    console.log(shopPath);
    res.sendFile(shopPath);
    //res.send('<h1>Test</h1');
});

module.exports = router;