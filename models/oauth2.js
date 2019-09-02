var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var conf = require('../conf');
 
var connection = mysql.createConnection(conf.db);
var tableName = 'account';
var sql;

module.exports = {
    authenticate: function(req, res) {
        // var userid = req.body.userid;
        // var password = req.body.password;
        // let user = {
        //     userid: 'admin',
        //     password: 'admin'
        //   }        
        //     // should check database
        //     if (userid === user.userid && password === user.password) {
        //         var token = jwt.sign({ userid: userid }, conf.secret, {'expiresIn': '1h'} );
        //         res.json({
        //         status: true,
        //         token: token
        //          });
        //     } else {
        //         res.json({
        //         status: false,
        //         message:'userid and password does not match'
        //         });
        //     }

        var userid = req.body.userid;
        var password = req.body.password;
        sql = mysql.format('SELECT * FROM ' + tableName + ' WHERE userid = ?', [userid]);
        connection.query(sql, function (err, results, fields) {
            if (err) {
                res.json({
                    status: false,
                    message: 'there are some error with querry'
                })
            } else {
                if (results.length >0) {
                    if (password == results[0].password) {
                        var token = jwt.sign({ userid: userid }, conf.secret, {'expiresIn': '1h'} );
                        res.json({
                            status: true,
                            token: token
                        });
                    } else {
                        res.json({
                            status: false,
                            message:'userid and password does not match'
                        });
                    }
                } else {
                    res.json({
                        status: false,
                        message:'userid does not exits'
                    });
                }
            }
        });    
    },
    verifyToken: function(req, res,next) {
        var userid = req.body.userid;
        var token=req.body.token || req.headers['token'];
        if (token){
            jwt.verify(token, conf.secret, function(err,res){
                if (err){
                 res.status(500).send('Token Invalid');
            } else {
                next();
                // res.send({status: true, token: token});
            }
        })
        } else {
        res.send('Please send a token')
        }
    }     
};