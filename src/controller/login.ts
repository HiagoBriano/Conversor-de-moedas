import loginService from '../services/login';
import { createToken } from '../services/safety';
import { NextFunction, Request, Response } from 'express';
import logger from '../log/logger';

const file = { file: 'src/controller/login.ts' };

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    logger.info(`Email ${email} tried to login`, file);

    const result = await loginService(email, password);

    if (result === 'E-mail not registered' || result === 'Incorrect password') {
      return res.status(401).json({ message: result });
    }

    const token = await createToken(result[0].id, result[0].email);

    res.status(200).json({
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      token: token,
    });

    logger.info(`email ${email} managed to login successfully`, file);
  } catch (error) {
    next(error);
  }
};

export default loginController;
