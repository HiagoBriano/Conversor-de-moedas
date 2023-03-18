import { NextFunction, Request, Response } from 'express';
import consultTransactionsService from '../services/consultTransactions';
import { readToken } from '../services/safety';

const consultTransactionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    const tokenRead = readToken(token as string);
    
    const result = await consultTransactionsService(tokenRead?.id as number);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default consultTransactionsController;
