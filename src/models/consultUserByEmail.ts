import connection from './connection';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

async function consultUserByEmailModel(email: string): Promise<[User]> {
  try {
    const [consultUserByEmail] = await connection.execute(
      'SELECT * FROM improving.users WHERE email = ?;',
      [email]
    );

    return consultUserByEmail;
  } catch (error) {
    console.log('Error querying email');
    throw new Error('Error');
  }
}

export default consultUserByEmailModel;
