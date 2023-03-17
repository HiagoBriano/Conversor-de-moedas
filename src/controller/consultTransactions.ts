import { NextFunction, Request, Response } from 'express';
import consultTransactionsService from '../services/consultTransactions';

const consultTransactionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const result = await consultTransactionsService(parseInt(userId));
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default consultTransactionsController;
