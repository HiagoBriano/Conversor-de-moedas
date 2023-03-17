import recordModel from '../../src/models/record';
import connection from '../../src/models/connection';

jest.mock('../../src/models/connection', () => {
  return {
    execute: jest.fn(),
  };
});

describe('recordModel', () => {
  const expectedResponse = [
    {
      fieldCount: 1,
      affectedRows: 1,
      insertId: 10,
      info: '',
      serverStatus: 200,
      warningStatus: 0,
    },
  ];

  it('must return registration confirmation', async () => {
    connection.execute.mockResolvedValue([expectedResponse]);
    const result = await recordModel(1, 'USD', 5, 'BRL', 5.5);
    expect(result).toBe(expectedResponse);
  });

  it('should return an error', async () => {
    const mockExecute = jest.fn(() => {
      throw new Error('error');
    });

    connection.execute.mockImplementationOnce(mockExecute);

    await expect(recordModel(1, 'USD', 5, 'BRL', 5.5)).rejects.toThrowError();
  });
});
