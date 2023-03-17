import { NextFunction, Request, Response } from 'express';

const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  if (typeof parseInt(userId) !== 'number') {
    return res.status(400).json({ message: 'invalid userid' });
  }

  next();
};

export default validateUserId;
