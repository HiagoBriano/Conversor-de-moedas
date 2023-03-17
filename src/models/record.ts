import connection from './connection';

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
    console.log('error registering query');
    throw new Error('error');
  }
};

export default recordModel;
