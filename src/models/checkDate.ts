import connection from './connection';
import logger from '../log/logger';

const file = { file: './src/models/checkDate.ts' };
async function checkDateModel(id: number) {
  try {
    const [date] = await connection.execute(
      'SELECT created_at FROM improving.record WHERE id = ?;',
      [id]
    );

    return date[0].created_at;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('error');
  }
}

export default checkDateModel;
