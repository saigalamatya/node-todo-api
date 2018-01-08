// mongo client
// const MongoClient = require('mongodb').MongoClient;

// ES6 De-structuring
const { MongoClient, ObjectID } = require('mongodb');

// var user = { name: 'Sabin', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // console.log(db);

  var db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a52126e20e19c3e4441e4b0')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Saigal Amatya'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data', err);
  });

});
