const ap = require('../../server');
const request = require('supertest');

describe('convertRouter', () => {
  it('should return a date', async () => {
    const response = await request(ap).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'active server' });
  });
});
