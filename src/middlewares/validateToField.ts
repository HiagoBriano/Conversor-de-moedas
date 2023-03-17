import { NextFunction, Request, Response } from 'express';

const validateToField = (req: Request, res: Response, next: NextFunction) => {
  const { to } = req.body;

  if (!to) {
    return res.status(400).json({ message: 'it is mandatory to send the field "to"' });
  }

  next();
};

export default validateToField;
