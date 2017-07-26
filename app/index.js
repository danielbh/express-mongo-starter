/**
 * Created by danielhollcraft on 7/20/17.
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  const db = mongoose.connect('mongodb://mongo:27017').connection;
  db.once('open', () => {
    res.send("Connected to MongoDB");
    db.close();
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});