import logger from '../log/logger';
import consultUserByEmailModel from '../models/consultUserByEmail';
import createUserModel from '../models/createUser';

const file = { file: 'src/services/CreateUser.ts' };

const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const result = await consultUserByEmailModel(email);

    if (!result.length) {
      const newUserData = await createUserModel(name, email, password);

      return newUserData;
    }
    
    logger.warn(`E-mail ${email} already registered`, file);
    return 'E-mail already registered';
  } catch (error) {
    throw new Error('error');
  }
};

export default createUserService;
