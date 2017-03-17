var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        name: 'Marek',
        full_name : 'Panie Marek Liska' });
});

module.exports = router;
