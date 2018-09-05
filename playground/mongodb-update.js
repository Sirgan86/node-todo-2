const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",{ useNewUrlParser: true }, (err,client)=>{
    if (err)
    {
        console.log('Unable to connect to DB');
    }
    
    console.log('Connected to DB');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b8fb6291622fec91fffacf3')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b8ea59bba79d8198347b04d')
    },{
        $set:{
            name:'Figghiozzo',
            
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

    client.close();
});

