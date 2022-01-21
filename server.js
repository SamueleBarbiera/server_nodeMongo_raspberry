const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

require('dotenv').config();
require("./db/mongodb.js")();
app.use(cors());
app.use(express.json());
app.set('view engine', 'html');
app.use('/', require('./routes/rasp'));
app.listen(port);
console.log(`Listening On http://127.0.0.1:${port}/rasp`);

module.exports = app;
