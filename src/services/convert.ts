import checkDateModel from '../models/checkDate';
import exchangeRates from '../models/exchangeRates';
import recordModel from '../models/record';

const convertService = async (
  userId: number,
  to: string,
  from: string,
  amount: number
) => {
  try {
    const response = await exchangeRates(to, from, amount);
    const { insertId } = await recordModel(
      userId,
      from,
      amount,
      to,
      response.info.rate
    );
    const date = await checkDateModel(insertId);
    const result = {
      transactionId: insertId,
      userId: userId,
      originCurrency: from,
      originValue: amount,
      destinationCurrency: to,
      destinationValue: response.result,
      conversionRateUsed: response.info.rate,
      date,
    };

    return result;
  } catch (error) {
    throw new Error('error');
  }
};

export default convertService;
