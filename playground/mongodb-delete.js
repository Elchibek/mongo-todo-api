const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').find({name: 'Elchibek'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.collection('Todos').deleteMany({text: 'Text'}).then((result) => {
    //     console.log(result);
    // });
    //

    // db.collection('Todos').deleteOne({text: 'Test text'}).then((result) => {
    //     console.log(result);
    // });


    db.collection('Todos').findOneAndDelete({text: 'Test text'}).then((result) => {
        console.log(result);
    })

    // client.close(); // не рекомендуется

});