import request from 'supertest';
import exchangeRates from '../../src/models/exchangeRates';
import checkDateModel from '../../src/models/checkDate';
import recordModel from '../../src/models/record';
const jwt = require('jsonwebtoken');
const app = require('../../server');

jest.mock('jsonwebtoken');
jest.mock('../../src/models/exchangeRates');
jest.mock('../../src/models/checkDate');
jest.mock('../../src/models/record');

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

  it('Status 200 when token is correct', async () => {
    (jwt.verify as jest.Mock).mockResolvedValue({
      id: 1,
      email: 'git@git.com',
    });

    (exchangeRates as jest.Mock).mockResolvedValue({
      success: true,
      query: { from: 'USD', to: 'BRL', amount: 100 },
      info: { timestamp: 1679337003, rate: 5.242003 },
      date: '2023-03-20',
      result: 524.2003
    });

    (checkDateModel as jest.Mock).mockResolvedValue("2023-03-20T18:30:16.000Z");

    (recordModel as jest.Mock).mockResolvedValue(
      {
        fieldCount: 1,
        affectedRows: 1,
        insertId: 1,
        info: '',
        serverStatus: 0,
        warningStatus: 0,
      },
    );

    const mock = {
      transactionId: 1,
      userId: 1,
      originCurrency: "USD",
      originValue: 100,
      destinationCurrency: "BRL",
      destinationValue: 524.2003,
      conversionRateUsed: 5.242003,
      date: "2023-03-20T18:30:16.000Z"
  };

    const response = await request(app)
      .post('/convert')
      .set('Authorization', 'validToken')
      .send({ "from": "USD", "to": "BRL", amount: 100 });

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(mock);
  });
});
