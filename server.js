const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

const databaseName = 'test-db';
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/${databaseName}`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
  let msg = err ? `! Mongoose failed to connect to ` : '✓ Mongoose connected to ';
  return console.log(msg + databaseName);
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build')));

app.listen(PORT, err => {
  let msg = err ? '! Server failed to start' : `✓ Server running on port ${PORT}`;
  return console.log(msg);
});
