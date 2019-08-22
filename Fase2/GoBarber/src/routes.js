import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth'
const routes = new Router();

routes.post('/users', UserController.store);

routes.use(authMiddleware);
// Somente rotas abaixo serão necessária autorização
routes.put('/users', UserController.update);
routes.post('/sessions', SessionsController.store);

export default routes;
