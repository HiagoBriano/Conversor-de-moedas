import { NextFunction, Request, Response } from 'express';
import logger from '../log/logger';
import convertService from '../services/convert';
import { readToken } from '../services/safety';

const file = { file: 'src/controller/convert.ts' };

const convertController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { to, from, amount } = req.body;
    const token = req.headers.authorization;
    const tokenRead = readToken(token as string);

    logger.info(
      `ID ${tokenRead?.id} requested conversion between currencies ${to} and ${from}`,
      file
    );

    const result = await convertService(
      tokenRead?.id as number,
      to,
      from,
      amount
    );

    res.status(200).json(result);

    logger.info(
      `ID ${tokenRead?.id} successfully received the conversion`,
      file
    );
  } catch (error) {
    next(error);
  }
};

export default convertController;
