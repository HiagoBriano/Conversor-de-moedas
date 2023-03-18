import { NextFunction, Request, Response } from 'express';
import convertService from '../services/convert';
import { readToken } from '../services/safety';

const convertController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, from, amount } = req.body;
    const token = req.headers.authorization;
    const tokenRead = readToken(token as string);

    const result = await convertService(tokenRead?.id as number, to, from, amount);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default convertController;
