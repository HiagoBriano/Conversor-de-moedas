import logger from '../log/logger';
import connection from './connection';

const file = { file: './src/models/consultUserByEmail.ts' };

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

async function consultUserByEmailModel(email: string): Promise<[User]> {
  try {
    const [consultUserByEmail] = await connection.execute(
      'SELECT * FROM improving.users WHERE email = ?;',
      [email]
    );

    return consultUserByEmail;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('Error');
  }
}

export default consultUserByEmailModel;
