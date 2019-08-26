var mysql = require('mysql');
var conf = require('../conf');
 
var connection = mysql.createConnection(conf.db);
var sql = '';
 
module.exports = {
    items: function (req, callback) {
        sql = 'SELECT * FROM account';
        return connection.query(sql, callback);
    },
    item: function (req, callback) {
        sql = mysql.format('SELECT * FROM account WHERE id = ?', [req.params.id]);
        return connection.query(sql, callback);
    }
};