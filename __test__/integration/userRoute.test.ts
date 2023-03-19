import request from 'supertest';
import consultUserByEmailModel from '../../src/models/consultUserByEmail';
import createUserModel from '../../src/models/createUser';
const bcryptjs = require('bcryptjs');
const app = require('../../server');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');
jest.mock('bcryptjs');
jest.mock('../../src/models/consultUserByEmail');
jest.mock('../../src/models/createUser');

describe('Route /user', () => {
  it('400 error if password is less than 6 characters', async () => {
    const response = await request(app)
      .post('/user')
      .send({ name: 'Hiago B', email: 'git@git.com', password: '1020' });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'Password must be at least six characters long'
    );
  });

  it('Error 400 if email format is invalid', async () => {
    const response = await request(app)
      .post('/user')
      .send({ name: 'Hiago B', email: 'gitgit.com', password: '102030' });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('invalid email format');
  });

  it('if all information is correct', async () => {
    (jwt.sign as jest.Mock).mockResolvedValue(
      'eyJhbGciOiJIUz...tGQlGjJDMkCfGyVcB4UhpE3EAgr8'
    );
    (bcryptjs.hash as jest.Mock).mockResolvedValue('password');
    (consultUserByEmailModel as jest.Mock).mockResolvedValue([]);
    (createUserModel as jest.Mock).mockResolvedValue({
      fieldCount: 1,
      affectedRows: 1,
      insertId: 1,
      info: 'string',
      serverStatus: 200,
      warningStatus: 0,
    });

    // const mock = {
    //   id: 1,
    //   name: 'Hiago B',
    //   email: 'git@git.com',
    //   token: 'eyJhbGciOiJIUz...tGQlGjJDMkCfGyVcB4UhpE3EAgr8',
    // };

    const response = await request(app)
      .post('/user')
      .send({ name: 'Hiago B', email: 'git@git.com', password: '102030' });

    expect(response.status).toBe(201);
  });
});
