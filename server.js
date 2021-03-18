// Express
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
//



// Mongoose
const mongoose = require('mongoose');

const dbURI = "mongodb+srv://<username>:<password>@<generated cluster>.mongodb.net/<database-name and NOT collection>?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  app.listen(5000, () => console.log('Server is running...'));
});

db.on('error', (error) => console.error(error));
//



//
const Persons = require('./persons');



// Get All
app.get('/', async (req, res) => {
  const persons = await Persons.find();
  res.json(persons);
});

// Create One
app.post('/', async (req, res) => {
  const person = new Persons(
    // {
    //   name: req.body.name,
    //   age: req.body.age
    // }
    {
      ...req.body
    }
  );

  try {
    res.json(await person.save());
  } catch (err) {
    res.json({errMessage: err.message});
  }
});
