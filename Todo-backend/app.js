// Core Module
const path = require('path');

// External Module
const express = require('express');
const cors = require('cors');

const dns = require('node:dns');
const { default: mongoose } = require('mongoose');

const MONGO_URI =
  'mongodb+srv://pleaseseethisna_db_user:LearnCoding@learnmongo.v2pzf64.mongodb.net/todo?appName=LearnMongo';

// Fix MongoDB SRV DNS lookup timeout on Windows IPv6 networks
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Local Modules
const todoItemRouter = require('./routes/todoItemRouter');
const errorsController = require('./controllers/errorsController');

const app = express();
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.use('/api/todo', todoItemRouter)

app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to mongo');
    app.listen(PORT, () => {
      console.log(`Server is running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error while connecting to mongo.', err);
  });
