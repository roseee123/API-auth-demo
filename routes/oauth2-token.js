var express = require('express');
var jwt = require('jsonwebtoken');
var oauth2 = require('../models/oauth2');
var conf = require('../conf');
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
router.use(function(req, res, next) {
    var token=req.body.token || req.headers['token'];
    if(token){
        jwt.verify(token, conf.secret, function(err,res){
            if(err){
             res.status(500).send('Token Invalid');
        }else{
            next();
        }
    })
}else{
    res.send('Please send a token')
}}
);
router.get('/home',function(req,res){
    res.send('Token Verified')
});

module.exports = router;