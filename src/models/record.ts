import logger from '../log/logger';
import connection from './connection';

const file = { file: './src/models/record.ts' };

interface Record {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

const recordModel = async (
  userId: number,
  originCurrency: string,
  originValue: number,
  destinationCurrency: string,
  conversionRateUsed: number
) => {
  try {
    const [record] = await connection.execute(
      'INSERT INTO improving.record(user_id, origin_currency, origin_value, destination_currency, conversion_rate_used)  VALUES (?, ?, ?, ?, ?);',
      [
        userId,
        originCurrency,
        originValue,
        destinationCurrency,
        conversionRateUsed,
      ]
    );

    return record as Record;
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('error');
  }
};

export default recordModel;
