// sono uguali
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var obj= new ObjectID();
// console.log(obj);


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",{ useNewUrlParser: true }, (err,client)=>{
    if (err)
    {
        console.log('Unable to connect to DB');
    }
    console.log('Connected to DB');
   // const db = client.db('TodoApp')
    

    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed:false
    // },(err,result)=>{
    //     if (err)
    //     {
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    // db.collection('Todos').insertOne({
    //     name: 'Ale',
    //     age:12,
    //     location:'Milano'
    // }, (err,result)=>{
    //     if (err)
    //     {
    //         return console.log('unable to insert user',err);
    //     }
    //     //console.log(result.ops[0]._id.getTimestamp());
    //     console.log(result.ops);
    // })
     client.close();
    

});

