import logger from '../log/logger';
import consultUserByEmailModel from '../models/consultUserByEmail';
import { validBcrypt } from './safety';

const file = { file: 'src/services/login.ts' };

const loginService = async (email: string, password: string) => {
  try {
    const user = await consultUserByEmailModel(email);

    if (!user.length) {
      logger.warn(`E-mail ${email} not registered`, file);
      return 'E-mail not registered';
    }

    const response = await validBcrypt(password, user[0].password);

    if (!response) {
      logger.warn(`E-mail ${email} entered the wrong password`, file);
      return 'Incorrect password';
    }

    return user;
  } catch (error) {
    throw new Error('Error');
  }
};

export default loginService;
