// var express = require('express');
// var user = require('../models/user');
// var oauth2 = require('../models/oauth2');

// var router = express.Router();

// // 獲取 /user 請求
// router.route('/')
//     // 取得所有資源
//     // oauth2.accessControl 定義在這，可針對 Web API 的 CRUD 個別確認權限
//     .get(function (req, res) {
//         // 無權限
//         if (res.customError) {
//             res.status(res.customStatus).json(res.customError);
//             return;
//         }
//         user.items(req, function (err, results, fields) {
//             if (err) {
//                 res.sendStatus(500);
//                 return console.error(err);
//             }
//             // 沒有找到指定的資源
//             if (!results.length) {
//                 res.sendStatus(404);
//                 return;
//             } 
//             res.json(results);
//         });
//     })
//     // 新增一筆資源
//     .post(function (req, res) {
//         user.add(req, function (err, results, fields) {
//             if (err) {
//                 res.sendStatus(500);
//                 return console.error(err);
//             }
//             // 新的資源已建立 (回應新增資源的 id)
//             res.status(201).json(results.insertId);
//         });
//     });
 
// // 獲取如 /user/1 請求
// router.route('/:id')
//     // 取得指定的一筆資源
//     .get(function (req, res) {
//         user.item(req, function (err, results, fields) {
//             if (err) {
//                 res.sendStatus(500);
//                 return console.error(err);
//             }
//             if (!results.length) {
//                 res.sendStatus(404);
//                 return;
//             } 
//             res.json(results);
//         });
//     })
//     // 刪除指定的一筆資源
//     .delete(function (req, res) {        
//         user.delete(req, function (err, results, fields) {
//             if (err) {
//                 res.sendStatus(500);
//                 return console.error(err);
//             } 
//             // 指定的資源已不存在
//             // SQL DELETE 成功 results.affectedRows 會返回 1，反之 0
//             if (!results.affectedRows) {
//                 res.sendStatus(410);
//                 return;
//             }
//             // 沒有內容 (成功)
//             res.sendStatus(204);
//         });
//     })
//     // 更新指定的一筆資源 (部份更新)
//     .put(function (req, res) {
//         user.update(req, function (err, results, fields) {
//             if (err) {
//                 res.sendStatus(500);
//                 return console.error(err);
//             }             
//             if (!results.affectedRows) {
//                 res.sendStatus(410);
//                 return;
//             }            
//             // response 被更新的資源欄位，但因 request 主體的欄位不包含 id，因此需自行加入
//             req.body.id = req.params.id;
//             res.json([req.body]);
//         });
//     });
    
// module.exports = router;