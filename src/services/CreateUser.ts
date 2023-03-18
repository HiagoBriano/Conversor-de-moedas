import consultUserByEmailModel from '../models/consultUserByEmail';
import createUserModel from '../models/createUser';

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

    return 'E-mail already registered';
  } catch (error) {
    throw new Error('error');
  }
};

export default createUserService;
