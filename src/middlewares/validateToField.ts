import { NextFunction, Request, Response } from 'express';

const validateToField = (req: Request, res: Response, next: NextFunction) => {
  const { to } = req.body;
  const coins = ['BRL', 'USD', 'EUR', 'JPY'];

  if (!to) {
    return res
      .status(400)
      .json({ message: 'it is mandatory to send the field "to"' });
  } else if (!coins.includes(to)) {
    return res
      .status(400)
      .json({
        message:
          'the field "to" must be one of the following values: "BRL", "USD", "EUR", "JPY"',
      });
  }

  next();
};

export default validateToField;
