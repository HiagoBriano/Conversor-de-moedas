import { NextFunction, Request, Response } from 'express';

const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;

  if (!parseInt(userId)) {
    return res.status(400).json({ message: 'invalid userid' });
  }

  next();
};

export default validateUserId;
