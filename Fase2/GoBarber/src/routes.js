import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionsController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// inicializa o multer com as configurações
const upload = multer(multerConfig);

routes.post('/sessions', SessionsController.store);
routes.post('/users', UserController.store);

// Somente rotas abaixo serão necessária autorização
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

// middleware upload que retorna o file
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
