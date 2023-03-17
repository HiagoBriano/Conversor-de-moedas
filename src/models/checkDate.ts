import connection from './connection';

async function checkDateModel(id: number) {
  try {
    const [date] = await connection.execute(
      'SELECT created_at FROM improving.record WHERE id = ?;',
      [id]
    );

    return date[0].created_at;
  } catch (error) {
    console.log('Error fetching date and time');
    throw new Error('error');
  }
}

export default checkDateModel;
