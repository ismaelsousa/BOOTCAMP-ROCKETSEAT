import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth'
const routes = new Router();

routes.post('/sessions', SessionsController.store);
routes.post('/users', UserController.store);

// Somente rotas abaixo serão necessária autorização
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
