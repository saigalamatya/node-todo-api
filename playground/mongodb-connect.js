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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   // ops stores all of the documents that were inserted
  //   client.close();
  // });

  // Insert new doc into Users (name, age, location
  db.collection('Users').insertOne({
    // _id: 123,
    name: 'Saigal Amatya',
    age: 23,
    location: 'Kathmandu'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to inser user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
    client.close();
  });
});
