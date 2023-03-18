import { NextFunction, Request, Response } from 'express';

const validateFromField = (req: Request, res: Response, next: NextFunction) => {
  const { from, to } = req.body;
  const coins = ['BRL', 'USD', 'EUR', 'JPY'];

  if (!from) {
    return res
      .status(400)
      .json({ message: 'it is mandatory to send the field "from"' });
  } else if (!coins.includes(from)) {
    return res
      .status(400)
      .json({
        message:
          'the field "from" must be one of the following values: "BRL", "USD", "EUR", "JPY"',
      });
  } else if (from === to) {
    return res
      .status(400)
      .json({ message: 'the fields "from" and "to" must be different' });
  }

  next();
};

export default validateFromField;
