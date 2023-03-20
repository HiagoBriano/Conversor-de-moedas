import { NextFunction, Request, Response } from 'express';
import { bcrypt, createToken } from '../services/safety';
import createUserService from '../services/CreateUser';
import logger from '../log/logger';

const file = { file: 'src/controller/CreateUser.ts' };

const CreateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    logger.info(`Email ${email} requested account creation`, file);

    const passwordHash: string = await bcrypt(password);
    const response = await createUserService(name, email, passwordHash);
    if (response === 'E-mail already registered') {
      return res.status(401).json({ message: response });
    }

    const token = await createToken(response.insertId, email);
    res.status(201).json({
      id: response.insertId,
      name: name,
      email: email,
      token: token,
    });

    logger.info(`Account for Email ${email} created`, file);
  } catch (error) {
    next(error);
  }
};

export default CreateUserController;
