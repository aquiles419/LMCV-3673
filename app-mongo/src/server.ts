// const express = require("express");
// const mongoose = require('mongoose');
import express from 'express';
import mongoose from 'mongoose';

// const routes = require('./routes')
// const db = require('./database/config');
import routes from './routes';
import db from './database/config';

class App {
  public express;

  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    //porta
    this.express.listen(3001, () => console.log('Server started at port 3001'));
  }

  database() {
    mongoose.connect(db.uri);
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

// module.exports = new App().express;
export default new App().express;
