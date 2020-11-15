import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateAppointmenteService from '../services/CreateAppointmentService';
import AppointmentRepository from '../repositories/appointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmenteService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

export default appointmentsRouter;
