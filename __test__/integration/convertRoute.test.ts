import request from 'supertest';
const jwt = require('jsonwebtoken');
const app = require('../../server');

jest.mock('jsonwebtoken');

describe('Route /convert', () => {
  it('Error 401 when token is invalid', async () => {
    const response = await request(app)
      .post('/convert')
      .set('Authorization', 'invalid-token');
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid Token');
  });

  it("error if 'amount' field is not sent", async () => {
    (jwt.verify as jest.Mock).mockResolvedValue({
      id: 2,
      email: 'git@git.com',
    });

    const response = await request(app)
      .post('/convert')
      .set('Authorization', 'validToken')
      .send({ "from": "BRL", "to": "USD" });
    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'it is mandatory to send the field "amount"'
    );
  });
});
