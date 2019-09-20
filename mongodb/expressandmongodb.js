var express = require('express')
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/EmployeeDB';

var str='';

app.route('/Employeeid').get(function(req,res){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
        var db = client.db('Employee');
        var cursor = db.collection('Employee').find({});
        str = "";
        cursor.forEach(function(item){
            if (item!=null){
                str = str + '  Employee id  ' + item.Employeeid + '  Employee Name  ' + item.EmployeeName + '</br>';
            }
        }, function(err){
            res.send(str);
            console.log(str)
            client.close();
        }
        );
    });
});

var server = app.listen(3000, function(){});