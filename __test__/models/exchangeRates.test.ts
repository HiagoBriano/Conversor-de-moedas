import axios from 'axios';
import exchangeRates from '../../src/models/exchangeRates';

jest.mock('axios');

describe('exchangeRates', () => {
  it('must return exchange rates', async () => {
    const expectedResponse = {
      success: true,
      query: { from: 'USD', to: 'EUR', amount: 10 },
      info: { timestamp: 1647487201, rate: 0.846208 },
      date: '2023-03-17T22:48:44.016Z',
      result: 8.46208,
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: expectedResponse });

    const result = await exchangeRates('EUR', 'USD', 10);

    expect(result).toEqual(expectedResponse);
  });
});
