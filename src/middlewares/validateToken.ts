import { NextFunction, Request, Response } from 'express';
import { readToken } from '../services/safety';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: 'Sending the token is mandatory' });
  }

  const validToken = readToken(token);
  if (!validToken) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  next();
};

export default validateToken;
