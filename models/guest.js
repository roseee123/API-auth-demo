// var mysql = require('mysql');
// var conf = require('../conf');
 
// var connection = mysql.createConnection(conf.db);
// var tableName = 'article';
// var sql;
 
// module.exports = {
//     items: function (req, callback) {
//         sql = mysql.format('SELECT * FROM ' + tableName);
//         return connection.query(sql, callback);
//     },
//     item: function (req, callback) {
//         sql = mysql.format('SELECT * FROM ' + tableName + ' WHERE id = ?', [req.params.id]);
//         return connection.query(sql, callback);
//     }
// };