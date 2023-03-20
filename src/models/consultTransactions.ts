import logger from '../log/logger';
import connection from './connection';

const file = { file: './src/models/consultTransactions.ts' };

async function consultTransactionsModel(userId: number) {
  try {
    const [data] = await connection.execute(
      'SELECT * FROM improving.record WHERE user_id = ?;',
      [userId]
    );

    return data;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('error');
  }
}

export default consultTransactionsModel;
