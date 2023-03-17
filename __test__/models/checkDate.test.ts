import checkDateModel from '../../src/models/checkDate';
import connection from '../../src/models/connection';

jest.mock('../../src/models/connection', () => {
  return {
    execute: jest.fn(),
  };
});

describe('checkDateModel', () => {
  const date = new Date();

  it('should return a date', async () => {
    connection.execute.mockResolvedValue([[{ created_at: date }]]);
    const result = await checkDateModel(1);
    expect(result).toBe(date);
  });

  it('should return an error', async () => {
    const mockExecute = jest.fn(() => {
      throw new Error('error');
    });

    connection.execute.mockImplementationOnce(mockExecute);

    await expect(checkDateModel(1)).rejects.toThrowError();
  });
});