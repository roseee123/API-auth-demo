var express = require('express');
var oauth2 = require('../models/oauth2');
var router = express.Router();

router.route('/login')
    .post(oauth2.authenticate, function (req, res, next) {
        if (err) {
            res.sendStatus(500);
            return console.error(err);
        }
        if (!results.length) {
            res.sendStatus(404);
            return;
        }
        res.json(results);
    }
    );

router.get('/home', oauth2.verifyToken, function (req, res) {
    res.send('Token Verified')
});
module.exports = router;