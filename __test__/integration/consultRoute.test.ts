import request from 'supertest';
const app = require('../../server');
const jwt = require('jsonwebtoken');

jest.mock('../../src/models/consultTransactions', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue([
    {
      id: 1,
      user_id: 2,
      origin_currency: 'USD',
      origin_value: 5,
      destination_currency: 'BRL',
      conversion_rate_used: 5.279404,
      created_at: '2023-03-18T18:47:20.000Z',
    },
    {
      id: 2,
      user_id: 2,
      origin_currency: 'BRL',
      origin_value: 100,
      destination_currency: 'USD',
      conversion_rate_used: 0.189415,
      created_at: '2023-03-18T18:47:20.000Z',
    },
    {
      id: 3,
      user_id: 2,
      origin_currency: 'BRL',
      origin_value: 100,
      destination_currency: 'USD',
      conversion_rate_used: 0.189415,
      created_at: '2023-03-18T18:47:20.000Z',
    },
  ]),
}));

jest.mock('jsonwebtoken');

describe('Route /consult', () => {
  it('400 error when token is not sent', async () => {
    const response = await request(app).get('/consult');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Sending the token is mandatory');
  });

  it('Error 401 when token is invalid', async () => {
    const response = await request(app)
      .get('/consult')
      .set('Authorization', 'invalid-token');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid Token');
  });

  it('Status 200 when token is correct', async () => {
    (jwt.verify as jest.Mock).mockResolvedValue({
      id: 2,
      email: 'git@git.com',
    });

    const mock = [
      {
        id: 1,
        user_id: 2,
        origin_currency: 'USD',
        origin_value: 5,
        destination_currency: 'BRL',
        conversion_rate_used: 5.279404,
        created_at: '2023-03-18T18:47:20.000Z',
      },
      {
        id: 2,
        user_id: 2,
        origin_currency: 'BRL',
        origin_value: 100,
        destination_currency: 'USD',
        conversion_rate_used: 0.189415,
        created_at: '2023-03-18T18:47:20.000Z',
      },
      {
        id: 3,
        user_id: 2,
        origin_currency: 'BRL',
        origin_value: 100,
        destination_currency: 'USD',
        conversion_rate_used: 0.189415,
        created_at: '2023-03-18T18:47:20.000Z',
      },
    ];

    const response = await request(app)
      .get('/consult')
      .set('Authorization', 'validToken');
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(mock);
  });
});
