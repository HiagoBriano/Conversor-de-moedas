import consultUserByEmail from '../models/consultUserByEmail';
import { validBcrypt } from './safety';

const loginService = async (email: string, password: string) => {
  try {
    const user = await consultUserByEmail(email);

    if (!user.length) {
      return 'E-mail not registered';
    }

    const response = await validBcrypt(password, user[0].password);

    if (!response) {
      return 'Incorrect password';
    }

    return user;
  } catch (error) {
    throw new Error('Error');
  }
};

export default loginService;
