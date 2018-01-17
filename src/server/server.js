const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const knex = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.listen(PORT, () => {
  console.log('Connected to port: ' + PORT);
});
