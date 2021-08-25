
import { Router } from 'express';

import OrphanagesController from './controllers/orphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;