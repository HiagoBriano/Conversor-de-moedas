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
    const results = await connection.query(
      'INSERT INTO users(name, email, password)  VALUES ($1, $2, $3) RETURNING id;',
      [name, email, password]
    );

    return results.rows[0].id;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('Error');
  }
};

export default createUserModel;
