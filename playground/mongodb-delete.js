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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Saigal'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a53495071a5ed1a0cd70af0')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

});
