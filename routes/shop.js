const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/info', (req, res, next) => {
    res.send('<h1>We are now at the \"Information\" page.</h1>');
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'shop.html'));
});

module.exports = router;