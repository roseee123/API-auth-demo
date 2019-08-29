// var mysql = require('mysql');
// var conf = require('../conf');
 
// var connection = mysql.createConnection(conf.db);
// var tableName = 'article';
// var sql;

// module.exports = {
//     items: function (req, callback) {
//         sql = mysql.format('SELET * FROM ' + tableName);
//         return connection.query(sql, callback);
//     },
//     item: function (req, callback) {
//         sql = mysql.format('SELECT * FROM ' + tableName + ' WHERE id = ?', [req.params.id]);
//         return connection.query(sql, callback);
//     },
//     add: function (req, callback) {  
//         sql = mysql.format('INSERT INTO ' + tableName + ' SET ?', req.body);
//         return connection.query(sql, callback);
//     },
//     delete: function (req, callback) {
//         sql = mysql.format('DELETE FROM ' + tableName + ' WHERE id = ?', [req.params.id]);
//         return connection.query(sql, callback);
//     },
//     update: function (req, callback) {       
//         sql = mysql.format('UPDATE ' + tableName + ' SET ? WHERE id = ?', [req.body, req.params.id]);
//         return connection.query(sql, callback);
//     }
// };