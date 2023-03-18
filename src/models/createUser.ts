import connection from './connection';

interface UserCreated {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

const createUserModel = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const [createdUser] = await connection.execute(
      'INSERT INTO improving.users(name, email, password)  VALUES (?, ?, ?);',
      [name, email, password]
    );

    return createdUser as UserCreated;
  } catch (error) {
    console.log('Error creating new user');
    throw new Error('Error');
  }
};

export default createUserModel;
