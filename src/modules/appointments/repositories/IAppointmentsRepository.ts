import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointimentDTO from '../dtos/ICreateAppointimentDTO';

export default interface IAppointmentsRepository {
 create(data: ICreateAppointimentDTO): Promise<Appointment>
 findByDate(date: Date): Promise<Appointment | undefined>;

}
