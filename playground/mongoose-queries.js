const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5a547aa7a99dfa3ce4877421';

// var id = '5a55c84af000132d7046cd08';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!!!');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// Query the User collection
User.find({
  _id: id
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: id
}).then((user) => {
  console.log('User', user);
});

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found!!!');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

User.findById('5a547aa7a99dfa3ce4877421').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
