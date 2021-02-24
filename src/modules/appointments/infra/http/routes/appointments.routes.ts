/* eslint-disable camelcase */
import { Router } from 'express';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController'

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController()

appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.post('/', appointmentsController.create)

export default appointmentsRouter;
