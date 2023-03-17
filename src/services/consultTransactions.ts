import consultTransactionsModel from '../models/consultTransactions';

const consultTransactionsService = async (userId: number) => {
  try {
    const result = await consultTransactionsModel(userId);
    return result;
  } catch (error) {
    throw new Error('error');
  }
};

export default consultTransactionsService;
