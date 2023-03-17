import { NextFunction, Request, Response } from 'express';

const validateFromField = (req: Request, res: Response, next: NextFunction) => {
  const { from } = req.body;

  if (!from) {
    return res.status(400).json({ message: 'it is mandatory to send the field "from"' });
  }

  next();
};

export default validateFromField;
