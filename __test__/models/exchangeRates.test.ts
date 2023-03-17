import axios from 'axios';
import exchangeRates from '../../src/models/exchangeRates';

jest.mock('axios');

describe('exchangeRates', () => {
  it('must return exchange rates', async () => {
    const expectedResponse = {
      success: true,
      query: { from: 'USD', to: 'EUR', amount: 10 },
      info: { timestamp: 1647487201, rate: 0.846208 },
      date: '2022-03-15',
      result: 8.46208,
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: expectedResponse });

    const result = await exchangeRates('EUR', 'USD', 10);

    expect(result).toEqual(expectedResponse);
  });
});
