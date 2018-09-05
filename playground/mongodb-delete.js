const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",{ useNewUrlParser: true }, (err,client)=>{
    if (err)
    {
        console.log('Unable to connect to DB');
    }
    
    console.log('Connected to DB');

    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //      console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name:'Andrew'});

    // db.collection('Users').findOneAndDelete({
    //     _id:new ObjectID("5b8faf631622fec91fffaa94")
    // }).then((results)=>{
    //     console.log(JSON.stringify(results,undefined,2));
    // });

    client.close();
});

