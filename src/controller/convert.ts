import { NextFunction, Request, Response } from 'express';
import convertService from '../services/convert';

const convertController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, from, amount } = req.body;
    const { userId } = req.params;
    const result = await convertService(parseInt(userId), to, from, amount);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default convertController;
