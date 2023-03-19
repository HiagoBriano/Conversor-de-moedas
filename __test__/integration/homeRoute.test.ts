const ap = require('../../server');
const request = require('supertest');

describe('Testing initial route', () => {
  it('Shows that the server is up', async () => {
    const response = await request(ap).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'active server' });
  });
});
