var bodyparser = require('body-parser');    // 解析 HTTP 請求主體的中介軟體
var express = require('express');
var cors = require('cors');                 // 跨來源資源共用 (允許不同網域的 HTTP 請求)
 
var conf = require('./conf');
var guestRoutes = require('./routes/guest');
// var userRoutes = require('./routes/user');
var oauth2TokenRoutes = require('./routes/oauth2-token');

var app = express();
 
app.use(cors());

// 使用 bodyparser.json() 將 HTTP 請求方法 POST、DELETE、PUT 和 PATCH，放在 HTTP 主體 (body) 發送的參數存放在 req.body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/auth', oauth2TokenRoutes);

app.use('/', guestRoutes);
// app.use('/user', userRoutes);

app.listen(conf.port, function () {
    console.log('app listening on port ' + conf.port + '!');
});

module.exports = app;