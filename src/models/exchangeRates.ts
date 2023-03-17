import axios from 'axios';
require('dotenv/config');

interface ExchangeRates {
  success: boolean;
  query: { from: string; to: string; amount: number };
  info: { timestamp: number; rate: number };
  date: string;
  result: number;
}

const key = process.env.API_KEY;

const exchangeRates = async (
  to: string,
  from: string,
  amount: number
): Promise<ExchangeRates> => {
  const response = await axios
    .get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: key,
        },
      }
    )
    .then((response) => response.data as ExchangeRates)
    .catch(error => error);
  return response;
};

export default exchangeRates;
