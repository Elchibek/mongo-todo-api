const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c6e2707bdeddc22d0f3828f')
    // }, {
    //     $set: {
    //         text: 'This is text'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //         console.log(result);
    //     }
    // );

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c6e1a96c80377242c68912f')
    }, {
        $set: {
            name: 'Elchi'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
            console.log(result);
        }
    );

    // client.close(); // не рекомендуется

});