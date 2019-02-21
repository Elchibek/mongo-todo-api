// const MongoClient = require('mongodb').MongoClientMongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//-------------------------------------------------
var user = {
    name: 'Elchibek',
    age: 22
};
var {name} = user; //Вывод: name: Elchibek
console.log(name);
//-------------------------------------------------

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    // db.collection('Todos').insertOne({
    //     text: 'Test text',
    //     completed: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo' + err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //
    // db.collection('Users').insertOne({
    //     // _id: 123,
    //     name: 'Elchibek',
    //     age: 22,
    //     location: 'Kyrgyzstan'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert users', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     console.log(result.ops);
    // });

    client.close(); // не рекомендуется

});