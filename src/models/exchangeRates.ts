import axios from 'axios';
require('dotenv/config');

interface ExchangeRates {
  success: boolean,
  query: { from: string, to: string, amount: number },
  info: { timestamp: number, rate: number },
  date: string,
  result: number
}

interface Error {
  data: {
    message: string,
  }
}

const key = process.env.API_KEY;

const exchangeRates = async (to: string, from: string, amount: number): Promise<ExchangeRates | Error> => {
  const response: ExchangeRates | Error = await axios
    .get(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: key,
        },
      }
    )
    .then((response) => response.data)
    .catch((response) => response.data);
  return response;
};

export default exchangeRates;
