var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';


MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((client) => {
    var db = client.db('Employee');
    db.collection('Employee').updateOne(
        {
            'EmployeeName' : 'AAA'
        },
        {
            $set : {'EmployeeName' : 'LuanDao'}
        }
    );
    return client
    // client.close();
  }).then((client1) => {
    let db = client1.db('Employee');
    db.collection('Employee').updateOne(
        {
            'EmployeeName' : 'Newemployee'
        },
        {
            $set : { 'EmployeeName' : 'BD'}
        });
    client1.close();
  }).catch((err) => {
    console.error('An error occurred connecting to MongoDB: ', err);
  });

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
// .then(function(err, client){
//     // if (err) throw err;
//     if (err) {
//         console.error('An error occurred connecting to MongoDB: ', err);
//     }
//     var db = client.db('Employee');
    // db.collection('Employee').updateOne(
    //     {
    //         'EmployeeName' : 'LuanDao'
    //     },
    //     {
    //         $set : {'EmployeeName' : 'AAA'}
    //     }
    // );
    // client.close();
// });



