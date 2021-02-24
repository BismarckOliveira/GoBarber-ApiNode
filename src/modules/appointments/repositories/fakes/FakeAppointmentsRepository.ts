
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

import ICreateAppointimentDTO from '@modules/appointments/dtos/ICreateAppointimentDTO'
import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {

  public async findByDate(date: Date): Promise<Appointment | undefined> {}

  public async create({
    date,
    provider_id
  }: ICreateAppointimentDTO): Promise<Appointment> {}
}

export default AppointmentsRepository;
