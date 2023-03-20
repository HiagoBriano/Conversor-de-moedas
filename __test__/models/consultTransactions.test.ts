import consultTransactionsModel from '../../src/models/consultTransactions';
import connection from '../../src/models/connection';

jest.mock('../../src/models/connection', () => {
  return {
    execute: jest.fn(),
  };
});

describe('consultTransactionsModel', () => {
  const date = new Date();

  it('must return the transactions', async () => {
    const response = [
      {
        id: 1,
        user_id: 10,
        origin_currency: 'BRL',
        origin_value: 5,
        destination_currency: 'USD',
        conversion_rate_used: 0.189422,
        created_at: date,
      },
      {
        id: 2,
        user_id: 10,
        origin_currency: 'BRL',
        origin_value: 5,
        destination_currency: 'USD',
        conversion_rate_used: 0.189422,
        created_at: date,
      },
    ];
    
    const mock = [response];

    connection.execute.mockResolvedValue(mock);
    const result = await consultTransactionsModel(10);

    expect(result).toStrictEqual(response);
  });

  it('should return an error', async () => {
    const mockExecute = jest.fn(() => {
      throw new Error('error');
    });

    connection.execute.mockImplementationOnce(mockExecute);

    await expect(consultTransactionsModel(10)).rejects.toThrowError();
  });
});
