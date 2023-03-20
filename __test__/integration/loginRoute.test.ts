import request from 'supertest';
import consultUserByEmailModel from '../../src/models/consultUserByEmail';
const bcryptjs = require('bcryptjs');
const app = require('../../server');
const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUz...tGQlGjJDMkCfGyVcB4UhpE3EAgr8';

jest.mock('jsonwebtoken');
jest.mock('bcryptjs');
jest.mock('../../src/models/consultUserByEmail');

describe('Route /login', () => {
  it('Error 401 if the email is not registered', async () => {
    (consultUserByEmailModel as jest.Mock).mockResolvedValue([]);

    const response = await request(app)
      .post('/login')
      .send({ email: 'git@git.com', password: '102030' });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('E-mail not registered');
  });

  it('Error 401 if the password is wrong', async () => {
    (consultUserByEmailModel as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: 'Hiago B',
        email: 'git@git.com',
        password:
          '$2a$04$Q6XOtEcqx6tLzmnlcno6.uKv2T/2bKDvwPXYx7D/iDa9OULKkg3aG',
        created_at: '2023-03-20T01:12:45.000Z',
      },
    ]);

    const response = await request(app)
      .post('/login')
      .send({ name: 'Hiago B', email: 'git@git.com', password: '102040' });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Incorrect password');
  });

  it('if all information is correct', async () => {
    (consultUserByEmailModel as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: 'Hiago B',
        email: 'git@git.com',
        password:
          '$2a$04$Q6XOtEcqx6tLzmnlcno6.uKv2T/2bKDvwPXYx7D/iDa9OULKkg3aG',
        created_at: '2023-03-20T01:12:45.000Z',
      },
    ]);

    (jwt.sign as jest.Mock).mockResolvedValue(token);

    (bcryptjs.compareSync as jest.Mock).mockResolvedValue(true);

    const mock = {
      id: 1,
      name: 'Hiago B',
      email: 'git@git.com',
      token,
    };

    const response = await request(app)
      .post('/login')
      .send({ email: 'git@git.com', password: '102030' });

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(mock);
  });
});
