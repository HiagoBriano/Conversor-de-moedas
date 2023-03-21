import logger from '../log/logger';
import pool from './connection';

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
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email = $1;',
      [email]
    );

    return rows;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('Error');
  }
}

export default consultUserByEmailModel;
