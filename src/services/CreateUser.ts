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
    let result = await consultUserByEmailModel(email);

    if (!result.length) {
      const user = await createUserModel(name, email, password);
      return user as number;
    }
    
    logger.warn(`E-mail ${email} already registered`, file);
    return 'E-mail already registered';
  } catch (error) {
    throw new Error('error');
  }
};

export default createUserService;
