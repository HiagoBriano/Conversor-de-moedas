import { Logger } from 'winston';
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
    const record = await connection.query(
      'INSERT INTO record(user_id, origin_currency, origin_value, destination_currency, conversion_rate_used)  VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at;',
      [
        userId,
        originCurrency,
        originValue,
        destinationCurrency,
        conversionRateUsed,
      ]
    );

    return {id: record.rows[0].id , data: record.rows[0].created_at};
  } catch (error) {
    logger.error('Error connecting to the database', file);
    throw new Error('error');
  }
};

export default recordModel;
