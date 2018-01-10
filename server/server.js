const { ObjectId } = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/12321
app.get('/todos/:id', (req, res) => {

  var id = req.params.id;

  if (!ObjectId.isValid) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    console.log(todo);
    if (!todo) {
      return res.status(404).send();
    }
    res.send({
      status: "200",
      todo
    });
  }).catch((e) => {
    res.status(400).send({
      message: "Invalid ID"
    });
  });

});

  // Valid id using isValid
    // 404 - send back an empty body

  // query by findById
    // success
      // if todo - send it back
      // if no todo -send back 404 with empty body
      // error
        // 400 - and send empty body back


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };
