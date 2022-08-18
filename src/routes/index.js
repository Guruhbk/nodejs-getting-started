import { Router } from 'express';
import * as homeCtrl from '../controllers/index.js';

const routes = Router();

routes.get('/', homeCtrl.home);

export default routes;
