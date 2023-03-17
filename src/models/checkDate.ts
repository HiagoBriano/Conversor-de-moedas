import connection from './connection';

async function checkDateModel(id: number) {
  try {
    const [date] = await connection.execute(
      'SELECT created_at FROM improving.record WHERE id = ?;',
      [id]
    );
    console.log(date);

    return date[0].created_at;
  } catch (error) {
    console.log('Error querying email');
    throw new Error('error');
  }
}

export default checkDateModel;
