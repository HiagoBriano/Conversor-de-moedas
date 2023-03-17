import connection from './connection';

async function consultTransactionsModel(userId: number) {
  try {
    const [data] = await connection.execute(
      'SELECT * FROM improving.record WHERE user_id = ?;',
      [userId]
    );

    return data;
  } catch (error) {
    console.log('Error when querying transactions');
    throw new Error('error');
  }
}

export default consultTransactionsModel;
