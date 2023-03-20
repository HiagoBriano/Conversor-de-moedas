import { NextFunction, Request, Response } from 'express';
import logger from '../log/logger';
import consultTransactionsService from '../services/consultTransactions';
import { readToken } from '../services/safety';

const file = { file: 'src/controller/consultTransactions.ts' };

const consultTransactionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const tokenRead = readToken(token as string);

    logger.info(`ID ${tokenRead?.id} requested the transactions`, file);

    const result = await consultTransactionsService(tokenRead?.id as number);

    res.status(200).json(result);

    logger.info(
      `ID ${tokenRead?.id} successfully received the transaction`,
      file
    );
  } catch (error) {
    next(error);
  }
};

export default consultTransactionsController;
