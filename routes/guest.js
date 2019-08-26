var express = require('express');
var account = require('../models/guest');
 
var router = express.Router();
 
// 獲取 /account 請求
router.route('/')
    // 取得所有資源
    .get(function (req, res) {
        account.items(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
 
            // 沒有找到指定的資源
            if (!results.length) {
                res.sendStatus(404);
                return;
            }
 
            res.json(results);
        });
    });
 
// 獲取如 /account/1 請求
router.route('/:id')
    // 取得指定的一筆資源
    .get(function (req, res) {
        account.item(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
 
            if (!results.length) {
                res.sendStatus(404);
                return;
            }
 
            res.json(results);
        });
    });
    
 
module.exports = router;