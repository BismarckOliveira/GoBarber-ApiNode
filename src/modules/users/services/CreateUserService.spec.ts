import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(
      fakeUsersRepository,
    );

    const user = await createUser.execute({
      name: 'Bismarck',
      email: 'bismarck@hotmail.com',
      password: '1234456'
    });

    expect(user).toHaveProperty('id');

  });
});



describe('CreateUser', () => {
  it('should be able to create a new user whith same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(
      fakeUsersRepository,
    );

    const user = await createUser.execute({
      name: 'Bismarck',
      email: 'bismarck@hotmail.com',
      password: '1234456'
    });

    expect(createUser.execute({
      name: 'Bismarck',
      email: 'bismarck@hotmail.com',
      password: '1234456'
    }),
).rejects.toBeInstanceOf(AppError);

  });
});

