import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string;

  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    // Buscando Usuarios que batem com o email
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect Email/password Combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect Email/password Combination.');
    }

    const token = sign({}, 'd0d6ae3c18ddedff6866e0a0874b0059', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
