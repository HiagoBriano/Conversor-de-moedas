import { NextFunction, Request, Response } from 'express';

const validateAmountField = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { amount } = req.body;

  if (!amount) {
    return res
      .status(400)
      .json({ message: 'it is mandatory to send the field "amount"' });
  } else if (amount <= 0) {
    return res.status(400).json({
      message: 'the "amount" field must be a number greater than zero',
    });
  }

  next();
};

export default validateAmountField;
