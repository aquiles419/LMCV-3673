// const express = require('express');
import { Router } from 'express';

// const UserController = require('./app/controller/userController');
import UserController from './app/controller/userController';

const routes = Router();

routes.get('/user', UserController.index);

routes.post('/user', UserController.store);

// module.exports = routes;
export default routes;
