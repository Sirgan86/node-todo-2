const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp", (err,client)=>{
    if (err)
    {
        console.log('Unable to connect to DB');
    }
    
    console.log('Connected to DB');

    const db = client.db('TodoApp');

    // FIND COME SELECT MYSQL
    // db.collection('Todos').find({age:12}).toArray().then((docs)=>{ 
    // console.log('Todos');
    // console.log(JSON.stringify(docs,undefined,2));
    // } , (err) => {
    //     console.log('Unable to fetch DB',err);
    // });
    // db.collection('Todos').find({
    //     _id:new ObjectID('5b8f9c6e509c6754315449df')
    // }).toArray().then((docs)=>{

    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // } , (err) => {
    //     console.log('Unable to fetch DB',err);
    // });
    

    // LINE COUNT

    // db.collection('Todos').find().count().then((count)=>{ 
    //     console.log(`Todos COUNT ${count}`);
    // } , (err) => {
    //     console.log('Unable to fetch DB',err);
    // });

    db.collection('Users').find({name:'Ale'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });


    client.close();
});

