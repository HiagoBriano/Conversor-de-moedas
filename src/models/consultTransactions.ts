import logger from '../log/logger';
import connection from './connection';

const file = { file: './src/models/consultTransactions.ts' };

async function consultTransactionsModel(userId: number) {
  try {
    const { rows } = await connection.query(
      'SELECT * FROM record WHERE user_id = $1;',
      [userId]
    );

    return rows;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('error');
  }
}

export default consultTransactionsModel;
