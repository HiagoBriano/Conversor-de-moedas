import logger from '../log/logger';
import connection from './connection';

const file = { file: './src/models/createUser.ts' };

interface UserCreated {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

const createUserModel = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const [createdUser] = await connection.execute(
      'INSERT INTO improving.users(name, email, password)  VALUES (?, ?, ?);',
      [name, email, password]
    );

    return createdUser as UserCreated;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('Error');
  }
};

export default createUserModel;
