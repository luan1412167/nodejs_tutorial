var  MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/EmployeeDB';
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if (err) throw err;
    // Client returned
    var db = client.db('Employee');
    db.collection('Employee').insertOne({
    Employeeid : 2,
    EmployeeName : 'Newemployee'
    });
    // db.collection('Employee').updateOne(
    //     {
    //         'EmployeeName':'Newemployee'
    //     },
    //     {
    //         $set:{'EmployeeName':'LuanDao'}
    //     }
    // );
    client.close();
});
// MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true},
//     function(err, db){
//         db.collection('Employee').insertOne({
//             Employeeid : 1,
//             EmployeeName : 'Newemployee'
//         });
//         db.collection('Employee').updateOne(
//             {
//                 'EmployeeName':'Newemployee'
//             },
//             {
//                 $set:{'EmployeeName':'LuanDao'}
//             }
//         );
//     });
