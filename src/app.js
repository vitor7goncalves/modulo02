/* const express = require('express');  ---> sem instalar o sucrase e o nodemon dessa forma
o node nao reconhece comandos mais atuais do js */
import express from 'express';
// --------> instalando o sucrase e nodemon, agora o node reconhecendo comando mais atuais do js
// const routes = require('./routes');
import routes from './routes';

import './config/database/index';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}
// module.exports = new App().server
export default new App().server;
